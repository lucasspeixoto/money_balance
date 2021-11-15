import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Content, Filters } from './styles';
import { ContentHeader } from '../../components/ContentHeader';
import { SelectInput } from '../../components/SelectInput/';
import {
	FinanceCardItem,
	IFinanceCardItemProps,
} from '../../components/FinanceCardItem';

export const List: React.FC = () => {
	const { type } = useParams();
	const titleOptions = useMemo(() => {
		return type === 'entry-balance'
			? { title: 'Entradas', lineColor: '#187D5F' }
			: { title: 'Saídas', lineColor: '#CC2A2C' };
	}, [type]);

	const months = [
		{ value: 1, label: 'Janeiro' },
		{ value: 2, label: 'Fevereiro' },
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

	const items: IFinanceCardItemProps[] = [
		{
			tagColor: '#D0CB4B',
			title: 'Conta de Luz',
			subtitle: '13/11/2021',
			amount: 'R$ 125, 00',
		},
		{
			tagColor: '#D0CB4B',
			title: 'Conta de Água',
			subtitle: '17/11/2021',
			amount: 'R$ 69, 00',
		},
		{
			tagColor: '#4E41F0',
			title: 'Internet',
			subtitle: '14/11/2021',
			amount: 'R$ 89, 90',
		},
		{
			tagColor: '#D0CB4B',
			title: 'Cartão de Crédito',
			subtitle: '20/11/2021',
			amount: 'R$ 330, 00',
		},
	];

	return (
		<Container>
			<ContentHeader
				title={titleOptions.title}
				lineColor={titleOptions.lineColor}
			>
				<SelectInput options={months} />
				<SelectInput options={years} />
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
				{items.map((item, index) => (
					<FinanceCardItem
						key={index}
						tagColor={item.tagColor}
						title={item.title}
						subtitle={item.subtitle}
						amount={item.amount}
					/>
				))}
			</Content>
		</Container>
	);
};
