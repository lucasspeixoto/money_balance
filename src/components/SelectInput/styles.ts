import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	justify-content: space-between;

	> select {
		padding: 0px 10px 0px 10px;
		border-radius: 5px;
		font-size: 18px;
		margin-left: 5px;

		> option {
			font-size: 18px;
		}
	}
`;
