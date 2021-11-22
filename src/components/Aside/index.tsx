import React from 'react';
import { Link } from 'react-router-dom';
import { FcComboChart, FcUp, FcDown } from 'react-icons/fc';
import { MdExitToApp, MdAddchart } from 'react-icons/md';

import { Container, Header, LogImg, Title, MenuContainer } from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/useAuth';

export const Aside: React.FC = () => {
	const { logout } = useAuth();

	return (
		<Container>
			<Header>
				<LogImg src={logoImg} alt='Logo Controle Financeiro'></LogImg>
				<Title>Controle Financeiro</Title>
			</Header>

			<MenuContainer>
				<Link to='/' className='MenuItemLink'>
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

				<Link to='/' onClick={() => logout()} className='MenuItemLink'>
					<MdExitToApp />
					Sair
				</Link>

			</MenuContainer>
		</Container>
	);
};
