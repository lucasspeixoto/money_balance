import styled from 'styled-components';

export const Container = styled.div`
	grid-area: CT;
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.primary};
	padding: 25px;
	height: calc(100vh - 70px);
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 15px;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.generic};
		border-radius: 20px;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: ${props => props.theme.colors.tertiary};
	}

	::-webkit-scrollbar-track {
		background-color: ${props => props.theme.colors.tertiary};
	}
`;
