import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 15px;

	> input {
		width: 100%;

		margin: 7px 0;

		padding: 10px;

		border-radius: 5px;
	}

	> label {
		color: ${props => props.theme.colors.white};
	}
`;
