import styled from 'styled-components';

export const Container = styled.div`
	width: 48%;
	height: 260px;

	margin: 10px 0;

	background-color: ${props => props.theme.colors.tertiary};
	color: ${props => props.theme.colors.white};

	border-radius: 8px;

	display: flex;
`;

export const SideLeft = styled.aside`
	padding: 30px 20px;

	> h2 {
		margin-bottom: 20px;
	}
`;

export const LegendContainer = styled.ul`
	list-style-type: none;

	height: 175px;
	padding-right: 15px;
	overflow-y: scroll;
`;

export const Legend = styled.li`
	display: flex;
	align-items: center;

	margin-bottom: 7px;

	> div {
		background-color: ${props => props.color};

		width: 60px;
		height: 50px;

		border-radius: 5px;

		font-size: 18px;
		line-height: 50px;
		text-align: center;
	}

	> span {
		margin-left: 5px;
	}
`;

export const SideRight = styled.main`
	display: flex;
	flex: 1;
	justify-content: center;
`;
