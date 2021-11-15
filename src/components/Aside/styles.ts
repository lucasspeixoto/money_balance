import styled from 'styled-components';

export const Container = styled.div`
	grid-area: AS;
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.secondary};
	padding-left: 20px;
	border-right: 1px solid ${props => props.theme.colors.grey};
	position: relative;

	.MenuItemLink {
		font-size: 20px;
		color: ${props => props.theme.colors.white};
		text-decoration: none;
		margin: 10px 0;
		display: flex;
		align-items: center;
		transition: opacity 0.3s;
		&:hover {
			opacity: 0.7;
		}
		> svg {
			font-size: 25px;
			margin-right: 5px;
		}
	}
`;

export const Header = styled.header`
	height: 70px;
	display: flex;
	align-items: center;
`;

export const LogImg = styled.img`
	height: 40px;
	width: 40px;
`;

export const Title = styled.h3`
	color: ${props => props.theme.colors.white};
	margin-left: 10px;
`;

export const MenuContainer = styled.nav`
	display: flex;
	flex-direction: column;
	margin-top: 50px;
`;

/* export const MenuItemLink = styled.a`
	font-size: 20px;
	color: ${props => props.theme.colors.white};
	text-decoration: none;
	margin: 10px 0;
	display: flex;
	align-items: center;
	transition: opacity 0.3s;
	&:hover {
		opacity: 0.7;
	}
	> svg {
		font-size: 25px;
		margin-right: 5px;
	}
`; */
