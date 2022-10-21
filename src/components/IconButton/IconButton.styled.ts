import styled from "styled-components";

export const StyledIconButton = styled.button`
	font-size: 0.8em;
	min-height: 3em;
	min-width: 3em;
	height: 3em;
	width: 3em;
	padding: 0.4em;
	margin: 0.2em;
	background: white;
	border-radius: 50%;
	border: none;
	box-shadow: 0 0.15em 0.1em 0.1em rgb(0 0 0 / 50%);
	cursor: pointer;

	&:active {
		transform: scale(0.97);
	}

	img {
		height: 100%;
		width: 100%;
	}
`