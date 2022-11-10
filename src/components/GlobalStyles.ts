import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-size: 1em;
		font-family: 'Inter', sans-serif;
	}

	body {
		padding-bottom: 0.8em;
	}

	button {
		outline: none;
	}

	::-webkit-scrollbar {
		width: 11px;
		height: 11px;
		background-color: #ffffff;
	}

	::-webkit-scrollbar-thumb {
		background: #cfcfcf;
		border-radius: 50px;
		border: 2px solid #ffffff;
	}

	.Toastify {
		--toastify-toast-min-height: 60px;
	}
	
	@media (max-width: 400px) {
		.Toastify {
			--toastify-toast-min-height: 17vw;
			font-size: 4vw;
		}

		.Toastify__toast-icon {
			width: min(20px, 5vw)
		}
	}
`
export default GlobalStyles