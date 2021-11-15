import React from 'react';
import { Container } from './styles';
import { ContentHeader } from '../../components/ContentHeader';
import { SelectInput } from '../../components/SelectInput/';

export const Dashboard: React.FC = () => {
	const months = [
		{ value: 'Janeiro', label: 'Janeiro' },
		{ value: 'Fevereiro', label: 'Fevereiro' },
		{ value: 'Março', label: 'Março' },
		{ value: 'Abril', label: 'Abril' },
		{ value: 'Maio', label: 'Maio' },
		{ value: 'Junho', label: 'Junho' },
		{ value: 'Julho', label: 'Julho' },
		{ value: 'Agosto', label: 'Agosto' },
		{ value: 'Setembro', label: 'Setembro' },
		{ value: 'Outubro', label: 'Outubro' },
		{ value: 'Novembro', label: 'Novembro' },
		{ value: 'Dezembro', label: 'Dezembro' },
	];

	const years = [
		{ value: '2019', label: '2019' },
		{ value: '2020', label: '2020' },
		{ value: '2021', label: '2021' },
		{ value: '2022', label: '2022' },
		{ value: '2023', label: '2023' },
		{ value: '2024', label: '2024' },
		{ value: '2025', label: '2025' },
		{ value: '2026', label: '2026' },
		{ value: '2027', label: '2027' },
		{ value: '2028', label: '2028' },
		{ value: '2029', label: '2029' },
		{ value: '2030', label: '2030' },
	];

	return (
		<Container>
			<ContentHeader title='Dashboard' lineColor='#258FB0'>
				<SelectInput options={months} />
				<SelectInput options={years} />
			</ContentHeader>
		</Container>
	);
};
