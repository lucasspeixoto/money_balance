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

	const months = [
		{ value: 2, label: 'Fevereiro' },
		{ value: 1, label: 'Janeiro' },
		{ value: 3, label: 'Março' },
		{ value: 4, label: 'Abril' },
		{ value: 5, label: 'Maio' },
		{ value: 6, label: 'Junho' },
		{ value: 7, label: 'Julho' },
		{ value: 8, label: 'Agosto' },
		{ value: 9, label: 'Setembro' },
		{ value: 10, label: 'Outubro' },
		{ value: 11, label: 'Novembro' },
		{ value: 12, label: 'Dezembro' },
	];

	const years = [
		{ value: 2019, label: 2019 },
		{ value: 2020, label: 2020 },
		{ value: 2021, label: 2021 },
		{ value: 2022, label: 2022 },
		{ value: 2023, label: 2023 },
		{ value: 2024, label: 2024 },
		{ value: 2025, label: 2025 },
		{ value: 2026, label: 2026 },
		{ value: 2027, label: 2027 },
		{ value: 2028, label: 2028 },
		{ value: 2029, label: 2029 },
		{ value: 2030, label: 2030 },
	];

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
