import styled from "styled-components"

export const StyledHeader = styled.header`
	--header-height: 4.375em;

	height: var(--header-height);
	margin: 2em 0 3.5em 0;
	padding-inline: 1.5em;

	display: flex;
	align-items: center;
	justify-content: space-between;
	
	position: relative;
	
	& > h1 {
		font-weight: 100;
		font-size: 1.7em;
		user-select: none;
	}

	@media (max-width: 625px) {
		& {
			font-size: 1.15em;
			padding-inline: 1em;
		}

		& > h1 {
			font-size: 1.5em;
		}
	}
`