import React, { ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label: string;
	ref: string;
}

const InputField: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, ...rest },
	ref,
) => (
	<Container>
		<label htmlFor={name}>{label}</label>
		<input {...rest} name={name} ref={ref} />
	</Container>
);

const Input = React.forwardRef(InputField);

export default Input;
