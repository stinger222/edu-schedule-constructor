import { ITheme, ThemeEnum } from './../types/styled'
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle<{theme: ITheme}>`
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
		-webkit-tap-highlight-color: transparent;
		font-family: 'JetBrains Mono', 'Segoe UI', Arial, Tahoma, 'Verdana', 'Arial Narrow', sans-serif;
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

	body {
		font-weight: 100;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background: ${({theme}) => theme.colors.bg};
		color: ${({theme}) => theme.colors.textPrimary};
	}
	
	a {
		text-decoration: none;
	}

	div:has(svg) {
		box-sizing: content-box;
	}

	input {
		outline: none;
		border: none;
	}

	input::placeholder {
		color: ${({theme}) => theme.colors.textPlaceholder};
	}

	input[type="time"]::-webkit-calendar-picker-indicator {
		background: url('data:image/png;base64,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');
		background-repeat: no-repeat;
		background-position: center;
		background-position-x: 95%;
		background-color: transparent;
		background-size: 75%;
		margin: 0;
		outline: none;
		filter:
			invert(${({theme}) => theme.type == ThemeEnum.light ? '0' : '1'})
			brightness(${({theme}) => theme.type == ThemeEnum.light ? '0' : '10'})
	}

	select {
		outline: none;
	}

	ul {
		list-style: none;
	}

	.btn {
		appearance: none;
		outline: none;
		border: none;
		cursor: pointer;
	}
	
  .btn:hover {
    opacity: 0.75;
		filter: brightness(0.97);
  }

  .btn:active {
    transform: scale(0.98);
  }

	/* TEMP (will be moved to anoter place)*/
	.schedule-row {
		display: flex;
		justify-content: space-between;
		gap: 2em;
		margin-bottom: 1.2em;
		margin-inline: 0.5em;
	}

	/* TEMP AS WELL */
	@media (max-width: 625px) {
		.schedule-row {
			font-size: 1.03em;
			padding-right: 0.4em;
			gap: 0;
		}
	}

	@media (max-width: 400px) {
		input[type="time"]::-webkit-calendar-picker-indicator {
			padding-left: 0;
		}

		input[type="time"]::-webkit-datetime-edit {
			padding-right: 0.3em;
		}
	}
`

export default GlobalStyles