import React from 'react';

import { Container, TitleContainer, Controllers } from './styles';

interface IContentHeaderProps {
	title: string;
	lineColor: string;
	children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = props => {


	return (
		<Container>
			<TitleContainer lineColor={props.lineColor}>
				<h1>{props.title}</h1>
			</TitleContainer>
			<Controllers>{props.children}</Controllers>
		</Container>
	);
};

export default ContentHeader;
