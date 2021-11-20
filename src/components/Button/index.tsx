import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean;
  background: string
};

export const Button: React.FC<IButtonProps> = ({
	isOutlined = false,
	background,
  children,
	...rest
}) => (
	<Container background={background}>
		<button {...rest}>{children}</button>
	</Container>
);
