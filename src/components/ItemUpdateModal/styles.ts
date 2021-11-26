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

export const Container = styled.div`
	grid-area: CT;
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.primary};
	padding: 25px;
	height: calc(100vh - 100px);
	overflow-y: scroll;
`;

export const Form = styled.form`
	padding-top: 15px;

	margin-bottom: 150px;

	display: grid;
	grid-template-columns: 2fr 2fr;
	grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
	gap: 10px;
	height: calc(100vh - 150px);
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
	}
`;

export const Title = styled.div`
	margin-top: 8vh;
	grid-area: title;

	@media (max-width: 785px) {
		margin-top: 10vh;
	}

	@media (max-width: 425px) {
		margin-top: 1vh;
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
