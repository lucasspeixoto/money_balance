import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

type InputProps = DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
	<input ref={ref} {...props} />
));
