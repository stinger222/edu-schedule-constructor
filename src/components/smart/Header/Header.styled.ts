import styled from "styled-components";

export const StyledHeader = styled.header`
	height: 4.375em;
	margin: 2em 0 5em 0;
	padding-inline: 1.5em;
	
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	& .future-burger-button {
		height: 3em;
		width: 3em;
		background: black;
	}
	
	& > h1.title {
		font-weight: 100;
		font-size: 1.7em;
		user-select: none;
	}

	@media (max-width: 625px) {
		& {
			font-size: 1.15em;
			padding-inline: 1em;
			margin-bottom: 4em;
		}
	}
`