import React from 'react';

import { Container } from './styles';

interface ISelectInputProps {
	options: {
		value: string | number;
		label: string | number;
	}[];
}

const SelectInput: React.FC<ISelectInputProps> = props => {
	return (
		<Container>
			<select>
				{props.options.map(option => (
					<option value={option.value}>{option.label}</option>
				))}
			</select>
		</Container>
	);
};

export default SelectInput;
