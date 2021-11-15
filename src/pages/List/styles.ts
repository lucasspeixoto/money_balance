import styled from 'styled-components';

export const Container = styled.div`
	/* grid-area: MH;
	color: ${props => props.theme.colors.white};
	background-color: ${props => props.theme.colors.secondary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 10px;
	border-bottom: 1px solid ${props => props.theme.colors.grey}; */
`;

export const Content = styled.div``;

export const Filters = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 30px;

	.tag-filter {
		font-size: 18px;
		font-weight: 500;
		color: ${props => props.theme.colors.white};
		background: none;

		margin: 0 10px;

		transition: opacity 0.3s;

		&:hover {
			opacity: 0.7;
		}

		&::after {
			content: '';
			display: block;
			width: 55px;
			margin: 0 auto;
			border-radius: 10px;
		}
	}

	.tag-filter-recurring::after {
		border-bottom: 10px solid ${props => props.theme.colors.recurring};
	}

	.tag-filter-eventual::after {
		border-bottom: 10px solid ${props => props.theme.colors.eventual};
	}
`;
