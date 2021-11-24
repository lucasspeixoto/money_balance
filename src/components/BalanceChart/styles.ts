import styled from 'styled-components';

interface ILegendProps {
	color: string;
}

export const Container = styled.div`
	width: 48%;
	height: 260px;

	margin: 10px 0;

	background-color: ${props => props.theme.colors.tertiary};
	color: ${props => props.theme.colors.white};

	border-radius: 8px;

	display: flex;

	@media (max-width: 770px) {
		display: flex;
		width: 100%;
	}
`;

export const SideLeft = styled.aside`
	padding: 30px 20px;

	> h2 {
		margin-bottom: 20px;
	}

	@media (max-width: 1345px) {
		padding: 0 15px 5px;
		margin-bottom: 7px;

		> h2 {
			margin-top: 15px;
			margin-bottom: 7px;
		}
	}

	@media (max-width: 420px) {
		padding: 15px;
		margin-bottom: 7px;
	}
`;

export const LegendContainer = styled.ul`
	list-style: none;

	height: 175px;
	padding-right: 15px;
	overflow-y: scroll;

  > h2 {
    margin-top: 20px;
  }

	@media (min-width: 1345px) {
		display: flex;
		flex-direction: column;
	}
`;

export const Legend = styled.li<ILegendProps>`
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

  @media (max-width: 1345px) {
    font-size: 18px;
    margin: 3px 0;

    > div {
      width: 55px;
      height: 55px;
      line-height: 55px;
    }

    > span {
      margin-left: 7px;
    }
  }
`;

export const SideRight = styled.main`
	display: flex;
	flex: 1;
	justify-content: center;

	@media (max-width: 1345px) {
		height: 100%;
	}
`;
