import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    cursor: pointer;
  }

  icon {
    font-size: 35px;
  }

  ::-webkit-scrollbar {
		width: 15px;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${props => props.theme.colors.secondary};
		border-radius: 20px;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: ${props => props.theme.colors.grey};
	}

  .error-message {
    font-size: 12px;
    font-weight: bold;

	  color: #d75757;
  }

`;
