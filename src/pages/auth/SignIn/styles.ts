import styled from 'styled-components';

export const Container = styled.div`
	height: 100vh;

	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	background-color: ${props => props.theme.colors.primary};

	.link {
		font-size: 14px;
		color: ${props => props.theme.colors.white};
		text-decoration: none;
		margin-left: 20px;
		margin-top: 10px;
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

export const LinksContainer = styled.div`
	display: flex;
	flex: 1;
	flex-direction: row;
	justify-content: center;

`;

export const Logo = styled.div`
	display: flex;
	align-items: center;

	margin-bottom: 30px;

	> h2 {
		color: ${props => props.theme.colors.white};
		margin-left: 7px;
	}

	> img {
		width: 40px;
		height: 40px;
	}
`;

export const Form = styled.form`
	width: 300px;
	height: 410px;

	padding: 15px 30px;

	border-radius: 10px;

	background-color: ${props => props.theme.colors.tertiary};
`;

export const FormTitle = styled.h2`
	margin-bottom: 20px;

	color: ${props => props.theme.colors.white};

	&:after {
		content: '';
		display: block;
		width: 55px;
		border-radius: 10px;
		border-bottom: 10px solid ${props => props.theme.colors.generic};
	}
`;
