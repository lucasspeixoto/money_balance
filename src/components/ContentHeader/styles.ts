import styled from 'styled-components';

interface ITitleContainerProps {
	lineColor: string;
}

export const Container = styled.div`
	width: 100%;
	height: 32px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;

	@media (max-width: 380px) {
		flex-direction: column;
	}
`;

export const TitleContainer = styled.div<ITitleContainerProps>`
	> h1 {
		color: ${props => props.theme.colors.white};

		&::after {
			content: '';
			display: block;
			width: 55px;
			border-bottom: 10px solid ${props => props.lineColor};
			border-radius: 10px;
		}
	}

	@media (max-width: 420px) {
		> h1 {
			font-size: 22px;


		}
	}
`;

export const Controllers = styled.div`
	display: flex;

	@media (max-width: 380px) {
		width: 100%;

		justify-content: space-around;

		margin-top: 10px;

	}
`;
