import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import { App } from './app.routes';
import { Auth } from './auth.routes';

export const Routes: React.FC = () => {
	const { isLogged } = useAuth();

	return <BrowserRouter>{!isLogged ? <Auth /> : <App />}</BrowserRouter>;
};
