import { useContext } from 'react';
import { IThemeContext, ThemeContext } from '../contexts/ThemeContext';

export function useTheme(): IThemeContext {
	const context = useContext(ThemeContext);

	return context;
}
