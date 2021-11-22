import styled, { keyframes } from 'styled-components';

interface IDotProps {
	delay: string;
}

export const LoadingWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: ${props => props.theme.colors.tertiary};

	> h3 {
		color: ${props => props.theme.colors.white};
	}
`;

export const BounceAnimation = keyframes`
  0% {
    margin-bottom: 0;
  }

  50% {
    margin-bottom: 1rem;
  }

  100% {
    margin-bottom: 0;
  }
`;

export const Dot = styled.div<IDotProps>`
	background-color: ${props => props.theme.colors.white};

	border-radius: 50%;

	width: 0.75rem;
	height: 0.75rem;
	margin: 0 0.25rem;

	animation-delay: ${props => props.delay};
`;
