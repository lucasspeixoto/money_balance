import React from 'react';

import { Container } from './style';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

export const Layout: React.FC = () => {
	return (
		<Container>
			<MainHeader />
			<Aside />
			<Content />
		</Container>
	);
};

export default Layout;
