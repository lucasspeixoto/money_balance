import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { Container, Content, Filters } from './styles';

import { ContentHeader } from '../../../components/ContentHeader';
import { SelectInput } from '../../../components/SelectInput';
import { FinanceCardItem } from '../../../components/FinanceCardItem';

import {
	formatCurrency,
	formatDate,
	filterItems,
} from '../../../utils/generic';
import { listOfMonths } from '../../../utils/constants';
import { actualMonth, actualYear } from '../../../utils/generic';
import { IData } from '../../interfaces/IData.model';
import { useExpensesGains } from '../../../hooks/useExpensesGains';
import { ItemUpdateModal } from '../../../components/ItemUpdateModal/ItemUpdateModal';
import toast, { Toaster } from 'react-hot-toast';

//* Constantes
const entryData = { title: 'Entradas', lineColor: '#187D5F' };
const exitData = { title: 'Saídas', lineColor: '#CC2A2C' };

export const List: React.FC = () => {
	const [data, setData] = useState<IData[]>([]);
	const [month, setMonth] = useState<number>(actualMonth);
	const [year, setYear] = useState<number>(actualYear);
	const [isItemUpdateModalOpen, setIsItemUpdateModalOpen] = useState(false);
	const [frequencyFilterSelected, setFrequencyFilterSelected] = useState([
		'recurring',
		'eventual',
	]);

	const [selectedItem, setSelectedItem] = useState<IData>();

	const { type } = useParams(); //* entry-balance ou exit-balance

	const { expenses, gains } = useExpensesGains();

	const titleAndLinecolor = useMemo(() => {
		return type === 'entry-balance' ? entryData : exitData;
	}, [type]);

	const listData = useMemo(() => {
		return type === 'entry-balance' ? gains : expenses;
	}, [type, expenses, gains]);

	const handleSelectedFrequency = useCallback(
		(frequency: string) => {
			const alreadSelected = frequencyFilterSelected.findIndex(
				item => item === frequency,
			);

			if (alreadSelected >= 0) {
				//* Ja existe o filtro, vai remover (manter apenas o outro caso exista)
				const filtered = frequencyFilterSelected.filter(
					item => item !== frequency,
				);
				setFrequencyFilterSelected(filtered);
				//* Ainda não existe o filtro
			} else {
				setFrequencyFilterSelected(prev => [...prev, frequency]);
			}
		},
		[frequencyFilterSelected],
	);

	const handleSelectedMonth = useCallback((month: string) => {
		try {
			const parseMonth = Number(month);
			setMonth(parseMonth);
			localStorage.setItem('month', String(parseMonth));
		} catch {
			throw new Error('invalid month value');
		}
	}, []);

	const handleSelectedYear = useCallback((year: string) => {
		try {
			const parseYear = Number(year);
			setYear(parseYear);
			localStorage.setItem('year', String(parseYear));
		} catch {
			throw new Error('invalid year value');
		}
	}, []);

	useEffect(() => {
		if (listData) {
			const filtered = listData.filter(item =>
				filterItems(
					item.date,
					year,
					month,
					item.frequency,
					frequencyFilterSelected,
				),
			);

			const response = filtered.map(item => {
				return {
					id: item.id,
					title: item.title,
					type: item.type,
					amount: item.amount,
					frequency: item.frequency,
					date: item.date,
					description: item.description,

					amountFormatted: formatCurrency(item.amount),
					dateFormatted: formatDate(item.date),
					tagColor: item.frequency === 'recurring' ? '#4E41F0' : '#D0CB4B',
				};
			});
			setData(response);
		}
	}, [listData, year, month, data.length, frequencyFilterSelected]);

	const months = useMemo(() => {
		return listOfMonths.map((month, index) => {
			return { value: index + 1, label: month };
		});
	}, []);

	const years = useMemo(() => {
		let uniqueYears: number[] = [];

		if (listData) {
			listData.forEach(item => {
				const date = new Date(item.date);
				const year = date.getFullYear();
				if (!uniqueYears.includes(year)) {
					uniqueYears.push(year);
				}
			});
		}

		return uniqueYears.map(year => {
			return {
				label: year,
				value: year,
			};
		});
	}, [listData]);

	function itemUpdateModalOpen(item: IData) {
		setSelectedItem(item);

		setIsItemUpdateModalOpen(true);
	}

	function handleDeleteItem() {
		toast.error('Item Excluído!', {
			style: { background: '#258FB0', color: '#fff' },
			duration: 3000,
		});
	}

	function handleUpdateItem() {
		toast.error('Item Editado!', {
			style: { background: '#258FB0', color: '#fff' },
			duration: 3000,
		});
	}

	return (
		<Container>
			<Toaster position='top-right' reverseOrder={false} />
			<ContentHeader
				title={titleAndLinecolor.title}
				lineColor={titleAndLinecolor.lineColor}
			>
				<SelectInput
					options={months}
					onChange={event => handleSelectedMonth(event.target.value)}
					defaultValue={month}
				/>
				<SelectInput
					options={years}
					onChange={event => handleSelectedYear(event.target.value)}
					defaultValue={year}
				/>
			</ContentHeader>

			<Filters>
				<button
					className={`tag-filter tag-filter-recurring
          ${frequencyFilterSelected.includes('recurring') && 'tag-actived'}
          `}
					type='button'
					onClick={() => handleSelectedFrequency('recurring')}
				>
					Recorrentes
				</button>
				<button
					className={`tag-filter tag-filter-eventual
        ${frequencyFilterSelected.includes('eventual') && 'tag-actived'}
        `}
					type='button'
					onClick={() => handleSelectedFrequency('eventual')}
				>
					Eventuais
				</button>
			</Filters>

			<Content>
				{data.map((item, index) => (
					<div onClick={() => itemUpdateModalOpen(item)} key={index}>
						<FinanceCardItem
							tagColor={item.tagColor}
							title={item.title}
							subtitle={item.dateFormatted}
							amount={item.amountFormatted}
						/>
					</div>
				))}
			</Content>
			{isItemUpdateModalOpen && (
				<ItemUpdateModal
					itemData={selectedItem}
					state={isItemUpdateModalOpen}
					setState={setIsItemUpdateModalOpen}
					title='Detalhe'
					hasDeleted={handleDeleteItem}
					hasUpdated={handleUpdateItem}
				/>
			)}
		</Container>
	);
};
