import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ForgotPassword } from '../pages/auth/ForgotPassword';
import { Registration } from '../pages/auth/Registration';

import { SignIn } from '../pages/auth/SignIn';

export const Auth: React.FC = () => (
	<Routes>
		<Route path='' element={<SignIn />} />
    <Route path='registration' element={<Registration />} />
    <Route path='forgot-password' element={<ForgotPassword />} />
	</Routes>
);
