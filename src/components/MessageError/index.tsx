import React from 'react';

import { Container, Message } from './styles';

interface IErrorProps {
	message: string;
}

export const Error: React.FC<IErrorProps> = ({ message }) => (

		<Message message={message} />

);
