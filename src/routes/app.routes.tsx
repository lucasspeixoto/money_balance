import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Dashboard } from '../pages/dashboards/Dashboard';
import { List } from '../pages/lists/List';
import { NewItem } from '../pages/registration/NewItem';

export const App: React.FC = () => (
	<Layout>
		<Routes>
			<Route path='' element={<Dashboard />} />
			<Route path='list/:type' element={<List />} />
			<Route path='add-new-item' element={<NewItem />} />
		</Routes>
	</Layout>
);
