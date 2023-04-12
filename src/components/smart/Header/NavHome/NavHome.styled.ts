import styled from "styled-components"

export const StyledNavHome = styled.div`
	height: 2em;
	width: 2em;
	min-width: 2em;
	padding: 0.35em;

	border: 0.14em solid ${({theme}) => theme.colors.secondary};
	border-radius: 2em;
	
	cursor: pointer;

	&:active {
		transform: scale(0.95);
	}

	& svg {
		height: 100%;
		width: 100%;
		transform: translateY(-0.1em);
	}

	& svg path {
		stroke: ${({theme}) => theme.colors.secondary};
	}
`