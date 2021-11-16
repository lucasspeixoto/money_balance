import React, { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Content, Filters } from './styles';
import { ContentHeader } from '../../components/ContentHeader';
import { SelectInput } from '../../components/SelectInput/';
import { FinanceCardItem } from '../../components/FinanceCardItem';

import gains from '../../repositories/gains';

import expenses from '../../repositories/expenses';
import {
	formatCurrency,
	formatDate,
	filterByYearAndMonth,
} from '../../utils/generic';
import { listOfMonths } from '../../utils/constants';

interface IData {
	title: string;
	amountFormatted: string;
	frequency: string;
	dateFormatted: string;
	tagColor: string;
}

export const List: React.FC = () => {
	const [data, setData] = useState<IData[]>([]);
	const [month, setMonth] = useState<string>(String(new Date().getMonth() + 1));
	const [year, setYear] = useState<string>(String(new Date().getFullYear()));

	const { type } = useParams();
	const titleOptions = useMemo(() => {
		return type === 'entry-balance'
			? { title: 'Entradas', lineColor: '#187D5F' }
			: { title: 'Saídas', lineColor: '#CC2A2C' };
	}, [type]);

	const listData = useMemo(() => {
		return type === 'entry-balance' ? gains : expenses;
	}, [type]);

	useEffect(() => {
		const filteredItemsByYearAndMonth = listData.filter(item =>
			filterByYearAndMonth(item.date, year, month),
		);
		const response = filteredItemsByYearAndMonth.map(item => {
			return {
				title: item.title,
				amountFormatted: formatCurrency(item.amount),
				frequency: item.frequency,
				dateFormatted: formatDate(item.date),
				tagColor: item.frequency === 'recurring' ? '#4E41F0' : '#D0CB4B',
			};
		});
		setData(response);
	}, [listData, year, month]);

	const months = useMemo(() => {
		return listOfMonths.map((month, index) => {
			return { value: index + 1, label: month };
		});
	}, []);

	const years = useMemo(() => {
		let uniqueYears: number[] = [];

		listData.forEach(item => {
			const date = new Date(item.date);

			const year = date.getFullYear();

			if (!uniqueYears.includes(year)) {
				uniqueYears.push(year);
			}
		});

		return uniqueYears.map(year => {
			return {
				label: year,
				value: year,
			};
		});
	}, [listData]);

	return (
		<Container>
			<ContentHeader
				title={titleOptions.title}
				lineColor={titleOptions.lineColor}
			>
				<SelectInput
					options={months}
					onChange={event => setMonth(event.target.value)}
					defaultValue={month}
				/>
				<SelectInput
					options={years}
					onChange={event => setYear(event.target.value)}
					defaultValue={year}
				/>
			</ContentHeader>

			<Filters>
				<button className='tag-filter tag-filter-recurring' type='button'>
					Recorrentes
				</button>
				<button className='tag-filter tag-filter-eventual' type='button'>
					Eventuais
				</button>
			</Filters>

			<Content>
				{data.map((item, index) => (
					<FinanceCardItem
						key={index}
						tagColor={item.tagColor}
						title={item.title}
						subtitle={item.dateFormatted}
						amount={item.amountFormatted}
					/>
				))}
			</Content>
		</Container>
	);
};
