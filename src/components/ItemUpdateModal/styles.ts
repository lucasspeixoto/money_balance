import styled, { keyframes } from 'styled-components';

const animate = keyframes`

  0%{
    transform: translateX(-200px);
    opacity: 0;
  }

  50%{
    opacity: .3;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }

`;

interface ITitleContainerProps {
	lineColor: string;
}

export const HeaderContainer = styled.div`
	width: 100%;
	height: 32px;
	display: flex;
	justify-content: space-between;
	margin-bottom: 25px;
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
`;

export const Controllers = styled.div``;

export const Container = styled.div`
	grid-area: CT;
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.primary};
	padding: 25px;

	height: calc(100vh - 20vh);
	overflow-y: scroll;
`;

export const CloseButton = styled.button`
	font-size: 25px;
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.primary};

	&:hover {
		opacity: 0.7;
	}

	> img {
		width: 35px;
		height: 35px;
	}
`;

export const Form = styled.form`
	padding-top: 15px;

	margin-bottom: 150px;

	display: grid;
	grid-template-columns: 2fr 2fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	gap: 10px;
	height: calc(100vh - 70px);
	grid-auto-flow: row;
	grid-template-areas:
		'title title'
		'type date'
		'frequency amount'
		'description description'
		'buttons buttons';

	animation: ${animate} 0.5s;

	@media (max-width: 880px) {
		display: flex;
		flex-direction: column;
		width: 50vw;
	}

	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
		width: 70vw;
	}

	@media (max-width: 400px) {
		display: flex;
		flex-direction: column;
		width: 80vw;
	}
`;

export const Title = styled.div`
	margin-top: 4vh;
	grid-area: title;

	@media (max-width: 785px) {
		margin-top: 6vh;
	}

	@media (max-width: 425px) {
		margin-top: 3vh;
	}
`;

export const Type = styled.div`
	grid-area: type;
`;

export const Date = styled.div`
	grid-area: date;
`;

export const Frequency = styled.div`
	grid-area: frequency;
`;

export const Amount = styled.div`
	grid-area: amount;
`;

export const Description = styled.div`
	grid-area: description;
`;

export const FieldContainer = styled.div`
	> label {
		color: ${props => props.theme.colors.white};
	}
`;
export const ButtonsContainer = styled.div`
	grid-area: buttons;
	display: flex;
	justify-content: center;
	align-items: right;
	gap: 25px;
`;
