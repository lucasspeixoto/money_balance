import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Dashboard } from '../pages/dashboards/Dashboard';
import { List } from '../pages/lists/List';

export const App: React.FC = () => (
	<Layout>
		<Routes>
			<Route path='/' element={<Dashboard />} />
			<Route path='/dashboard' element={<Dashboard />} />
			<Route path='/list/:type' element={<List />} />
		</Routes>
	</Layout>
);
