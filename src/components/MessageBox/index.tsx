import React from 'react';
import { IMessageBoxProps } from '../../pages/interfaces/IMessageBoxProps.model';

import { Container } from './styles';

export const MessageBox: React.FC<IMessageBoxProps> = ({
	title,
	description,
	footerText,
	icon,
}) => (
	<Container>
		<header>
			<h1>
				{title} <img src={icon} alt={title} />
			</h1>
			<p>{description}</p>
		</header>
		<footer>
			<span>{footerText}</span>
		</footer>
	</Container>
);
