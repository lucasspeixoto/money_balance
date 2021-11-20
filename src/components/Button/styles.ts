import styled from 'styled-components';

interface IButtonProps {
	background: string;
}

export const Container = styled.div<IButtonProps>`
	margin-top: 15px;

	> button {
		width: 100%;

		margin-top: 2px;
		padding: 10px;

		border-radius: 5px;

		font-weight: bold;
		color: ${props => props.theme.colors.white};
		background-color: ${props => props.background};

		transition: filter 0.2s;

		cursor: pointer;
		border: 0;

		&:hover {
			opacity: 0.7;
		}

		&:not(:disabled):hover {
			filter: brightness(0.9);
		}

		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}
`;
