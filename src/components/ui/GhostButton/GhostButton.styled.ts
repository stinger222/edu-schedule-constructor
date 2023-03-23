import styled from "styled-components";

export const StyledGhostButton = styled.button`
	background: transparent;
	position: relative;

	font-size: 1em;
	font-weight: 400;
	letter-spacing: 0.05em;
	color: ${({theme}) => theme.borders.dashed};

	display: flex;
	align-items: center;
	justify-content: center;

	height: 3em;
	max-height: 3em;
	width: 100%;

	margin-inline: auto;
	padding: 1.8em;

	border-image-slice: 130 !important;
	border-image-width: 3.125em !important;
	border-image-repeat: round round  !important;
	border-image-source: url(${require('../../../assets/icons/dashed-border.png')})  !important;
	border-style: solid !important; 

	& > span {
		font-size: 1.3em;
	}

	& > span > span.plus {
		font-size: 2em;
		font-weight: 100;
	}

	& > span:has(.plus) {
		line-height: 2em
	}
`