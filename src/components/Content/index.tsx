import React from 'react';

import { Container } from './styles';

const Content: React.FC = props => {
	return <Container>{props.children}</Container>;
};

export default Content;
