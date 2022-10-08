import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-size: 1em;
	}

	body {
		font-family: 'Inter', sans-serif;
	}

	button {
		outline: none;
	}
`
export default GlobalStyles