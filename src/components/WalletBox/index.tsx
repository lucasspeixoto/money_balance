import React from 'react';

import { Container } from './styles';

import dolarImg from '../../assets/dolar.svg';
import arrowUpImg from '../../assets/arrow-up.svg';
import arrowDownImg from '../../assets/arrow-down.svg';

import CountUp from 'react-countup';

type TWalletIcon = 'dolar' | 'arrow-up' | 'arrow-down';

interface IWalletBoxProps {
	title: string;
	amount: number;
	footerLabel: string;
	icon: TWalletIcon;
	color: string;
}

export const WalletBox: React.FC<IWalletBoxProps> = ({
	title,
	amount,
	footerLabel,
	icon,
	color,
}) => {
	const getSelectedIcon = () => {
		switch (icon) {
			case 'dolar':
				return dolarImg;
			case 'arrow-down':
				return arrowDownImg;
			case 'arrow-up':
				return arrowUpImg;
			default:
				return undefined;
		}
	};

	const selectedIcon = getSelectedIcon();

	return (
		<Container color={color}>
			<span>{title}</span>
			<h1>
				<CountUp
					start={0}
					end={amount}
					duration={0.7}
					prefix={'R$ '}
					separator='.'
					decimal=','
					decimals={2}
					preserveValue={true}
				/>
			</h1>
			<small>{footerLabel}</small>
			<img src={selectedIcon} alt={title} />
		</Container>
	);
};
