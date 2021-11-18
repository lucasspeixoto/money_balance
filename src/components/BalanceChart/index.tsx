import React from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {
	Container,
	SideLeft,
	LegendContainer,
	Legend,
	SideRight,
} from './styles';

interface IBalanceChartProps {
	relations: {
		name: string;
		value: number;
		percent: number;
		color: string;
	}[];
}

export const BalanceChart: React.FC<IBalanceChartProps> = ({ relations }) => (
	<Container>
		<SideLeft>
			<LegendContainer>
				<h2>Relação</h2>
				{relations.map((item, index) => (
					<Legend key={index} color={item.color}>
						<div>{item.percent} %</div>
						<span>{item.name}</span>
					</Legend>
				))}
			</LegendContainer>
		</SideLeft>

		<SideRight>
			<ResponsiveContainer>
				<PieChart>
					<Pie data={relations} labelLine={false} dataKey='percent'>
						{relations.map((item, index) => (
							<Cell key={index} fill={item.color} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</SideRight>
	</Container>
);
