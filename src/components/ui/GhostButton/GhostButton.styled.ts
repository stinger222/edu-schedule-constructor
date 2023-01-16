import styled from "styled-components";

// (!) Current appearance is temporal and will match desired one later!!!

export const StyledGhostButton = styled.button`
	background: white;
	position: relative;

	font-size: 1em;
	font-weight: 400;
	letter-spacing: 0.05em;

	display: flex;
	align-items: center;
	justify-content: center;
	
	max-width: 100%;
	height: 3em;
	max-height: 3em;
	margin: 1em auto;
	padding: 1.8em 3em;

	border-radius: 1em;
	box-shadow: 0.1em 0.2em 0.1em 0em rgb(0 0 0 / 20%), -0.1em -0.1em 0.4em -0.2em rgb(0 0 0 / 30%);

	& > span {
		font-size: 1.5em;
	}
`