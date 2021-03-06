import React from 'react';

import { Container } from './styles';

import { MainHeader } from '../MainHeader';
import { Aside } from '../Aside';
import { Content } from '../Content';

export const Layout: React.FC = ({ children }) => (
	<Container>
		<MainHeader />
		<Aside />
		<Content>{children}</Content>
	</Container>
);
