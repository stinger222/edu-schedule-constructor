import styled from "styled-components";

export const StyledDropdown = styled.div`
	--dropdown-font-size: 0.6;
	--dropdown-margin-top: 1em;
	
	font-size: calc(1em * var(--dropdown-font-size));

	height: 17em;
	width: 30em;
	background: white;

	border-radius: 1.5em;
	box-shadow: 0 0 0 0.15em black, -0.2em 0.5em 0.5em rgb(0 0 0 / 25%);

	position: absolute;
	right: 1em;

	/* now even when dropdown font-size will be changed,
	dropdow position relative to header will be the same */
	top: calc(1 / var(--dropdown-font-size) * var(--header-height) + var(--dropdown-margin-top)); 	
`