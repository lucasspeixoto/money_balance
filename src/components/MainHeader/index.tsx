import React, { useState } from 'react';
import { Toggle } from '../Toggle';

import { Container, Profile, Welcome, UserName } from './styles';
import { useTheme } from '../../hooks/useTheme';
import { useAuth } from '../../hooks/useAuth';

export const MainHeader: React.FC = () => {
	const { toggleTheme, theme } = useTheme();
	const [darkTheme, setDarkTheme] = useState(() =>
		theme.title === 'dark' ? true : false,
	);

	const { user } = useAuth();

	const handleChangeTheme = () => {
		setDarkTheme(!darkTheme);
		toggleTheme();
	};

	return (
		<Container>
			<Toggle
				labelLeft='Claro'
				labelRight='Escuro'
				checked={darkTheme}
				onChange={handleChangeTheme}
			/>
			<Profile>
				<Welcome>
					Olá, <UserName>{user?.name}</UserName>{' '}
				</Welcome>
			</Profile>
		</Container>
	);
};
