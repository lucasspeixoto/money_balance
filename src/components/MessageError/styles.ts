import styled from 'styled-components';

interface IMessageProps {
	message: string;
}

export const Container = styled.div``;

export const Message = styled.p<IMessageProps>`
	font-size: 8px;

	color: #b45757;
`;
