import React from 'react';

import {
	Container,
	LegendContainer,
	SideLeft,
	SideRight,
	Legend,
} from './styles';

import { BarChart, Bar, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency } from '../../utils/generic';

interface IBarChartProps {
	title: string;
	types: {
		name: string;
		amount: number;
		percent: number;
		color: string;
	}[];
}

export const TypesChart: React.FC<IBarChartProps> = ({ title, types }) => (
	<Container>
		<SideLeft>
			<h2>{title}</h2>
			<LegendContainer>
				{types.map((item, index) => (
					<Legend key={index} color={item.color}>
						<div>{item.percent} %</div>
						<span>{item.name}</span>
					</Legend>
				))}
			</LegendContainer>
		</SideLeft>

		<SideRight>
			<ResponsiveContainer>
				<BarChart data={types}>
					<Bar dataKey='amount' name='Valor'>
						{types.map((item, index) => (
							<Cell key={index} cursor='pointer' fill={item.color} />
						))}
					</Bar>
					<Tooltip cursor={{ fill: 'none' }} formatter={formatCurrency} />
				</BarChart>
			</ResponsiveContainer>
		</SideRight>
	</Container>
);
