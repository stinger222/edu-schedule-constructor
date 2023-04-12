import styled from "styled-components"

export const StyledContainer = styled.div`
	margin: 0 auto;
	max-width: 625px;
	padding-bottom: 2em;

	@media (max-width: 625px) {
		& {
			font-size: 2.55vw;
		}
	}
`