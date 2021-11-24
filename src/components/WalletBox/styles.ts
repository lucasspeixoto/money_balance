import styled from 'styled-components';

interface IContainerProps {
	color: string;
}

export const Container = styled.div<IContainerProps>`
	width: 32%;
	height: 150px;

	margin: 10px 0;

	background-color: ${props => props.color};
	color: ${props => props.theme.colors.white};

	border-radius: 8px;
	padding: 10px 6px;

	position: relative;
	overflow: hidden;

	> img {
		height: 110%;

		position: absolute;
		top: -10px;
		right: -28px;

		opacity: 0.3;
	}

	> span {
		font-size: 18px;
		font-weight: 500;
	}

	> small {
		font-size: 12px;
		position: absolute;
		bottom: 10px;
	}

	@media (max-width: 770px) {
		> span {
			font-size: 14px;
		}

		> h1 {
			word-wrap: break-word;
			font-size: 22px;

			> strong {
				display: inline-block;
				width: 100%;
				font-size: 18px;
			}
		}
	}

	@media (max-width: 420px) {
		width: 100%;

		> h1 {
			display: flex;

			strong {
				position: block;
				width: auto;
				font-size: 22px;
			}

			strong:after {
				content: ' ';
				display: inline-block;
				width: 1px;
			}
		}
	}
`;

export const Content = styled.div``;
