import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
	@font-face {
			font-family: 'JetBrains Mono';
			src: url(${require('../../assets/fonts/JetBrainsMono-Thin.ttf')}) format('truetype');
			font-weight: 100;
			font-style: normal;
	}

	@font-face {
			font-family: 'JetBrains Mono';
			src: url(${require('../../assets/fonts/JetBrainsMono-ExtraLight.ttf')}) format('truetype');
			font-weight: 200;
			font-style: normal;
	}

	@font-face {
			font-family: 'JetBrains Mono';
			src: url(${require('../../assets/fonts/JetBrainsMono-Light.ttf')}) format('truetype');
			font-weight: 300;
			font-style: normal;
	}

	@font-face {
			font-family: 'JetBrains Mono';
			src: url(${require('../../assets/fonts/JetBrainsMono-Regular.ttf')}) format('truetype');
			font-weight: 400;
			font-style: normal;
	}

	@font-face {
			font-family: 'JetBrains Mono';
			src: url(${require('../../assets/fonts/JetBrainsMono-Medium.ttf')}) format('truetype');
			font-weight: 500;
			font-style: normal;
	}

	@font-face {
			font-family: 'JetBrains Mono';
			src: url(${require('../../assets/fonts/JetBrainsMono-Bold.ttf')}) format('truetype');
			font-weight: 700;
			font-style: normal;
	}

	@font-face {
			font-family: 'Inter';
			src: url(${require('../../assets/fonts/Inter-Light.ttf')}) format('truetype');
			font-weight: 300;
			font-style: normal;
	}

	@font-face {
			font-family: 'Inter';
			src: url(${require('../../assets/fonts/Inter-Regular.ttf')}) format('truetype');
			font-weight: 400;
			font-style: normal;
	}

	@font-face {
			font-family: 'Inter';
			src: url(${require('../../assets/fonts/Inter-Medium.ttf')}) format('truetype');
			font-weight: 500;
			font-style: normal;
	}

	body {
		font-family: 'JetBrains Mono';
		font-weight: 100;
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

`

export default GlobalStyles