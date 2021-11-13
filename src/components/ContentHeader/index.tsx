import React from 'react';

import { Container, TitleContainer, Controllers } from './styles';

const ContentHeader: React.FC = () => {
	return (
		<Container>
			<TitleContainer>
				<h1>Content Header</h1>
			</TitleContainer>
			<Controllers>
				<button type='button'>Botão A</button>
				<button type='button'>Botão A</button>
			</Controllers>
		</Container>
	);
};

export default ContentHeader;
