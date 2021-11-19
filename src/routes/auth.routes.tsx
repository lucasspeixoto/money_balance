import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';

export const App: React.FC = () => (
	<Routes>
		<Route path='/dashboard' element={<SignIn />} />
	</Routes>
);
