import React from 'react';

import { Container, TitleContainer, Controllers } from './styles';

interface IContentHeaderProps {
	title: string;
	lineColor: string;
	children: React.ReactNode;
}

export const ContentHeader: React.FC<IContentHeaderProps> = ({
	lineColor,
	title,
	children,
}) => {
	return (
		<Container>
			<TitleContainer lineColor={lineColor}>
				<h1>{title}</h1>
			</TitleContainer>
			<Controllers>{children}</Controllers>
		</Container>
	);
};
