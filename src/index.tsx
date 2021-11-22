import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AuthContextProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root'),
);
