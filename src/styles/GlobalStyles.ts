import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

::-webkit-scrollbar {
	width: 15px;
}

::-webkit-scrollbar-thumb {
	color: #252A48;
	background-color: #fff;
	border: 1px solid #252A48;
	border-radius: 20px;
}

::-webkit-scrollbar-thumb:hover {
	background-color: #252A48;
	border: 1px solid #fff;
}

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
    font-size: 35px
  }

`;
