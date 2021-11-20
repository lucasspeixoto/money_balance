import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	isOutlined?: boolean;
  background: string;
  label: string
};

export const Button: React.FC<IButtonProps> = ({
	isOutlined = false,
	background,
  children,
  label,
	...rest
}) => (
	<Container background={background}>
		<button {...rest}>{label}</button>
	</Container>
);
