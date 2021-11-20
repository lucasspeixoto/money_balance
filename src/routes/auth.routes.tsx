import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ForgotPassword } from '../pages/ForgotPassword';
import { Registration } from '../pages/Registration';

import { SignIn } from '../pages/SignIn';

export const Auth: React.FC = () => (
	<Routes>
		<Route path='/' element={<SignIn />} />
    <Route path='/registration' element={<Registration />} />
    <Route path='/forgot-password' element={<ForgotPassword />} />
	</Routes>
);
