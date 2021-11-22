import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 15px;

	> input {

    font-size: 18px;

		width: 100%;

		margin: 7px 0;

		padding: 10px;

		border-radius: 5px;

    border: 2px solid ${props => props.theme.colors.white};

		&:hover {
			opacity: 0.9;
			border: 2px solid ${props => props.theme.colors.generic};
		}
	}

	> label {
		color: ${props => props.theme.colors.white};
	}
`;
