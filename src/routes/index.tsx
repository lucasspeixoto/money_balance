import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app.routes';

export const Routes: React.FC = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
