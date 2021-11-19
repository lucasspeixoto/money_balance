import React, { useMemo, useState } from 'react';
import { Toggle } from '../Toggle';
import emojis from '../../utils/emojis';

import { Container, Profile, Welcome, UserName } from './styles';
import { useTheme } from '../../hooks/theme';

export const MainHeader: React.FC = () => {
	const { toggleTheme, theme } = useTheme();
	const [darkTheme, setDarkTheme] = useState(() =>
		theme.title === 'dark' ? true : false,
	);

	const handleChangeTheme = () => {
		setDarkTheme(!darkTheme);
		toggleTheme();
	};
	const emoji = useMemo(() => {
		const index = Math.floor(Math.random() * emojis.length);
		return emojis[index];
	}, []);

	return (
		<Container>
			<Toggle
				labelLeft='Claro'
				labelRight='Escuro'
				checked={darkTheme}
				onChange={handleChangeTheme}
			/>
			<Profile>
				<Welcome>Olá, {emoji} </Welcome>
				<UserName>Lucas Peixoto</UserName>
			</Profile>
		</Container>
	);
};
