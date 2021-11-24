import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcComboChart, FcUp, FcDown } from 'react-icons/fc';
import { MdExitToApp, MdAddchart, MdClose, MdMenu } from 'react-icons/md';

import {
	Container,
	Header,
	LogImg,
	Title,
	MenuContainer,
	ToggleMenu,
	ThemeToogleFooter,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { Toggle } from '../Toggle';

export const Aside: React.FC = () => {
	const { logout } = useAuth();
	const [toggleMenuIsOpen, setToggleMenuIsOpen] = useState(false);
	const { toggleTheme, theme } = useTheme();
	const [darkTheme, setDarkTheme] = useState(() =>
		theme.title === 'dark' ? true : false,
	);

	const handleToggleMenu = () => {
		setToggleMenuIsOpen(!toggleMenuIsOpen);
	};

	const handleChangeTheme = () => {
		setDarkTheme(!darkTheme);
		toggleTheme();
	};

	return (
		<Container menuIsOpen={toggleMenuIsOpen}>
			<Header>
				<ToggleMenu onClick={handleToggleMenu}>
					{toggleMenuIsOpen ? <MdClose /> : <MdMenu />}
				</ToggleMenu>
				<LogImg src={logoImg} alt='Logo Controle Financeiro'></LogImg>
				<Title>Controle Financeiro</Title>
			</Header>

			<MenuContainer>
				<Link to='/' className='MenuItemLink'>
					<FcComboChart />
					Dashboard
				</Link>

				<Link to='/add-new-item' className='MenuItemLink'>
					<MdAddchart />
					Novo Item
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
			<ThemeToogleFooter menuIsOpen={toggleMenuIsOpen}>
				<Toggle checked={darkTheme} onChange={handleChangeTheme} />
			</ThemeToogleFooter>
		</Container>
	);
};
