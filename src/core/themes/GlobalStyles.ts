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

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		-webkit-tap-highlight-color: transparent
	}

	div:has(svg) {
		box-sizing: content-box;
	}

	body {
		font-family: 'JetBrains Mono', 'Segoe UI', Arial, Tahoma, 'Verdana', 'Arial Narrow', sans-serif;
		font-weight: 100;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	::-webkit-scrollbar {
		width: 15px;
		background-color: #ffffff;
	}

	::-webkit-scrollbar-thumb {
		background: #dcdcdc;
		border-radius: 50px;
		border: 3.5px solid #ffffff;
	}

	.btn {
		appearance: none;
		outline: none;
		border: none;
		cursor: pointer;
	}
	
  .btn:hover {
    opacity: 0.75;
  }

  .btn:active {
    transform: scale(0.98);
  }

	/* TEMP (will be moved to anoter place)*/
	.schedule_row {
		display: flex;
		justify-content: space-between;
		gap: 2em;
		margin-bottom: 1.2em;
		margin-inline: 0.5em;
	}

	/* TEMP AS WELL */
	@media (max-width: 625px) {
		.schedule_row {
			font-size: 1.03em;
			padding-right: 0.4em;
			gap: 0;
		}
	}
`

export default GlobalStyles