import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<IButtonProps> = ({ children, ...rest }) => (
	<Container {...rest}>{children}</Container>
);
