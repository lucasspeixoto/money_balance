import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SignIn } from '../pages/SignIn';

import { App } from './app.routes';

export const Routes: React.FC = () => (
	<BrowserRouter>
    <SignIn/>
		{/* <App /> */}
	</BrowserRouter>
);
