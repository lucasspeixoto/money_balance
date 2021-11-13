import React from 'react';

import { Container } from './styles';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';

const Layout: React.FC = props => {
	return (
		<Container>
			<MainHeader />
			<Aside />
			<Content>{props.children}</Content>
		</Container>
	);
};

export default Layout;
