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

`;

export const Form = styled.form`
	padding-top: 15px;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 2fr;
	gap: 3px 3px;
	grid-auto-flow: row;
	grid-template-areas:
		'title title title title'
		'type date frequency amount'
		'description description description description';

	@media (max-width: 880px) {
		display: flex;
		flex-direction: column;
	}


`;

export const Title = styled.div`
	grid-area: title;

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
	margin-top: 5px;

	> label {
		color: ${props => props.theme.colors.white};
	}

  animation: ${animate} .5s;
`;

export const ButtonsContainer = styled.div`
	width: auto;
	flex: 1;
	display: flex;
	align-self: center;
	justify-content: end;
`;
