import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
	display: flex;
	justify-content: space-between;

	flex-wrap: wrap;

	@media (max-width: 380px) {
		padding-top: 20px;
	}
`;
