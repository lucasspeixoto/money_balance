import styled, { css } from 'styled-components';

interface IContainerProps {
	menuIsOpen: boolean;
}

interface IToggleThemeFooterProps {
	menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
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

	position: relative;

	@media (max-width: 640px) {
		padding-left: 7px;

		position: fixed;

		z-index: 2;

		width: 160px;

		height: ${props => (props.menuIsOpen ? '100vh' : '70px')};

		overflow: hidden;

		${props =>
			!props.menuIsOpen &&
			css`
				border: none;
				border-bottom: 1px solid ${props => props.theme.colors.grey};
			`}
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

	@media (max-width: 640px) {
		display: none;
	}
`;

export const Title = styled.h3`
	color: ${props => props.theme.colors.white};

	margin-left: 10px;

	@media (max-width: 640px) {
		display: none;
	}
`;

export const MenuContainer = styled.nav`
	display: flex;
	flex-direction: column;

	margin-top: 50px;
`;

export const ToggleMenu = styled.button`
	width: 40px;
	height: 40px;

	border-radius: 8px;

	font-size: 22px;

	background-color: ${props => props.theme.colors.generic};
	color: ${props => props.theme.colors.white};

	transition: opacity 0.3s;

	&:hover {
		opacity: 0.7;
	}

	display: none;

	@media (max-width: 640px) {
		display: flex;

		justify-content: center;
		align-items: center;
	}
`;

export const ThemeToogleFooter = styled.footer<IToggleThemeFooterProps>`
	display: none;

	position: absolute;
	bottom: 30px;

	@media (max-width: 470px) {
		display: ${props => (props.menuIsOpen ? 'flex' : 'none')};
	}
`;
