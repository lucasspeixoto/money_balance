import React from 'react';
import { Link } from 'react-router-dom';
import { FcComboChart, FcUp, FcDown } from 'react-icons/fc';
import { MdExitToApp, MdAddchart } from 'react-icons/md';

import { Container, Header, LogImg, Title, MenuContainer } from './styles';

import logoImg from '../../assets/logo.svg';

export const Aside: React.FC = () => {
	return (
		<Container>
			<Header>
				<LogImg src={logoImg} alt='Logo Controle Financeiro'></LogImg>
				<Title>Controle Financeiro</Title>
			</Header>

			<MenuContainer>
				<Link to='/dashboard' className='MenuItemLink'>
					<FcComboChart />
					Dashboard
				</Link>

				<Link to='#' className='MenuItemLink'>
					<MdAddchart />
					Adicionar
				</Link>

				<Link to='/list/entry-balance' className='MenuItemLink'>
					<FcUp />
					Entradas
				</Link>

				<Link to='/list/exit-balance' className='MenuItemLink'>
					<FcDown />
					Saídas
				</Link>

				<Link to='#' className='MenuItemLink'>
					<MdExitToApp />
					Sair
				</Link>
			</MenuContainer>
		</Container>
	);
};
