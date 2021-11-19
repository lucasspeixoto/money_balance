import React from 'react';

import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';
import { formatCurrency } from '../../utils/generic';

import {
	Container,
	ChartContainer,
	Header,
	LegendContainer,
	Legend,
} from './styles';

interface IHistoryChartProps {
	history: {
		month: string;
		amountEntry: number;
		amountOutput: number;
	}[];
	lineColorAmountEntry: string;
	lineColorAmountOutput: string;
	year: number;
}

export const HistoryChart: React.FC<IHistoryChartProps> = ({
	history,
	lineColorAmountEntry,
	lineColorAmountOutput,
	year,
}) => (
	<Container>
		<Header>
			<h2>Histórico de Saldo - {String(year)}</h2>
			<LegendContainer>
				<Legend color={lineColorAmountEntry}>
					<div></div>
					<span>Entradas</span>
				</Legend>
				<Legend color={lineColorAmountOutput}>
					<div></div>
					<span>Saídas</span>
				</Legend>
			</LegendContainer>
		</Header>
		<ChartContainer>
			<ResponsiveContainer>
				<LineChart
					data={history}
					margin={{ top: 0, bottom: 5, right: 20, left: 20 }}
				>
					<CartesianGrid strokeDasharray='3 3' stroke='#cecece' />
					<XAxis dataKey='month' stroke='#cecece' />
					<Tooltip formatter={formatCurrency} />
					<Line
						type='monotone'
						dataKey='amountEntry'
						name='Entradas'
						stroke={lineColorAmountEntry}
						strokeWidth={5}
						dot={{ r: 5 }}
						activeDot={{ r: 8 }}
					/>
					<Line
						type='monotone'
						dataKey='amountOutput'
						name='Saídas'
						stroke={lineColorAmountOutput}
						strokeWidth={5}
						dot={{ r: 5 }}
						activeDot={{ r: 8 }}
					/>
				</LineChart>
			</ResponsiveContainer>
		</ChartContainer>
	</Container>
);
