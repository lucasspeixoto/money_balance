import React from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import { BsSunFill, BsSun } from 'react-icons/bs';
import { useTheme } from '../../hooks/useTheme';

import { Container, ToggleLabel, ToggleSelector } from './styles';

interface IToggleProps {
	checked: boolean;
	onChange(): void;
}

export const Toggle: React.FC<IToggleProps> = ({ checked, onChange }) => {
	const { theme } = useTheme();

	return (
		<Container>
			<ToggleLabel>
				{theme.title === 'dark' ? <BsSunFill /> : <BsSun />}
			</ToggleLabel>
			<ToggleSelector
				checked={checked}
				uncheckedIcon={false}
				checkedIcon={false}
				onChange={onChange}
			/>
			<ToggleLabel>
				{theme.title === 'dark' ? <MdDarkMode /> : <MdOutlineDarkMode />}
			</ToggleLabel>
		</Container>
	);
};
