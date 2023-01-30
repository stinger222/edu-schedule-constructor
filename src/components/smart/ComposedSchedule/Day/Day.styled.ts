import styled from "styled-components";

export const StyledDay = styled.div`
	font-size: 1.4em;
	width: 8.4em;
	height: max-content;
	border-radius: 0.8em;
	padding-bottom: 0.5em;
	background: ${({theme}) => theme.colors.dayCardBg};
	box-shadow: ${({theme}) => theme.boxShadows.secondaryShadow};

	& header {
		font-size: 1.3em;
		line-height: 1em;
		font-weight: 400;
		text-align: center;
		padding-block: 0.5em;
	}

	& .card-body {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr;
		padding-inline: 0.3em;
	}

	& .card-body span {
		text-align: center;
		line-height: 1.5em;
	}

	& .card-body span:nth-child(2n - 1) {
		grid-column: 1 / 2;
		font-weight: 100;
	}

	& .card-body span:nth-child(2n) {
		grid-column: 2 / 3;
		font-weight: 400;
	}
`