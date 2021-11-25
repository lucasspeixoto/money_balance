import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ExpensesGainsContextProvider } from './contexts/ExpensesGainsContext';

ReactDOM.render(
	<React.StrictMode>
		<AuthContextProvider>
			<ThemeProvider>
				<ExpensesGainsContextProvider>
					<App />
				</ExpensesGainsContextProvider>
			</ThemeProvider>
		</AuthContextProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
