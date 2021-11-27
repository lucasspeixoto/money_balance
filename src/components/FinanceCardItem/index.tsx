import React from 'react';
import { Container, Tag } from './styles';

export interface IFinanceCardItemProps {
	tagColor: string;
	title: string;
	subtitle: string;
	amount: number;
}

export const FinanceCardItem: React.FC<IFinanceCardItemProps> = ({
	tagColor,
	title,
	subtitle,
	amount,
}) => (
	<Container>
		<Tag color={tagColor} />
		<div>
			<span>{title}</span>
			<small>{subtitle}</small>
		</div>
		<h3>R$ {amount}</h3>
	</Container>
);
