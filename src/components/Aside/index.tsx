import React from 'react';
import { FcComboChart, FcDocument, FcUp, FcDown } from 'react-icons/fc';
import { MdExitToApp } from 'react-icons/md';

import {
	Container,
	Header,
	LogImg,
	Title,
	MenuContainer,
	MenuItemLink,
} from './styles';

import logoImg from '../../assets/logo.svg';

export const Aside: React.FC = () => {
	return (
		<Container>
			<Header>
				<LogImg src={logoImg} alt='Logo Controle Financeiro'></LogImg>
				<Title>Controle Financeiro</Title>
			</Header>

			<MenuContainer>
				<MenuItemLink href='#'>
					<FcComboChart />
					Dashboard
				</MenuItemLink>

				<MenuItemLink href='#'>
					<FcDocument />
					Adicionar
				</MenuItemLink>

				<MenuItemLink href='#'>
					<FcUp />
					Entradas
				</MenuItemLink>

				<MenuItemLink href='#'>
					<FcDown />
					Saídas
				</MenuItemLink>

				<MenuItemLink href='#'>
					<MdExitToApp />
					Sair
				</MenuItemLink>
			</MenuContainer>
		</Container>
	);
};

export default Aside;
