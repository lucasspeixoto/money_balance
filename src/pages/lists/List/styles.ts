import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main``;

export const Filters = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;

	margin-bottom: 20px;

	.tag-filter {
		font-size: 18px;
		font-weight: 500;

		color: ${props => props.theme.colors.white};
		background: none;

		margin: 0 10px;

		transition: opacity 0.3s;
		opacity: 0.4;

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

	.tag-actived {
		opacity: 1;
	}

  @media (max-width: 380px) {
		padding-top: 20px;
	}
`;
