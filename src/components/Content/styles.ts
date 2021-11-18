import styled from 'styled-components';

export const Container = styled.div`
	grid-area: CT;
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.primary};
	padding: 25px;
	height: calc(100vh - 70px);
	overflow-y: scroll;
`;
