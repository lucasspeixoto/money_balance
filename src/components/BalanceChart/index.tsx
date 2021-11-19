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
	balance: {
		name: string;
		value: number;
		percent: number;
		color: string;
	}[];
}

export const BalanceChart: React.FC<IBalanceChartProps> = ({ balance }) => (
	<Container>
		<SideLeft>
			<LegendContainer>
				<h2>Relação</h2>
				{balance.map((item, index) => (
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
					<Pie data={balance} labelLine={false} dataKey='percent'>
						{balance.map((item, index) => (
							<Cell key={index} fill={item.color} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		</SideRight>
	</Container>
);
