import React from 'react';
import { Container, Tag } from './styles';

export interface IFinanceCardItemProps {
	tagColor: string;
	title: string;
	subtitle: string;
	amount: string;
}

const FinanceCardItem: React.FC<IFinanceCardItemProps> = props => {
	return (
		<Container>
			<Tag color={props.tagColor} />
			<div>
				<span>{props.title}</span>
				<small>{props.subtitle}</small>
			</div>
			<h3>{props.amount}</h3>
		</Container>
	);
};

export default FinanceCardItem;
