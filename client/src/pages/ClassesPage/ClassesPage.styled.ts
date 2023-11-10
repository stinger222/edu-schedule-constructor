import styled from "styled-components"

export const StyledClassesPage = styled.div`
	@media(max-width: 500px) {
		& .class-cards-list {
			font-size: 1.1em;
		}

		& .page-header > h1 {
			font-size: 1.8em;
		} 
	}

	@media(max-width: 450px) {
		& .class-cards-list {
			font-size: 1.2em;
		}
	}

	@media(max-width: 400px) {
		& .class-cards-list {
			font-size: 1.3em;
		}

		& .page-header > h1 {
			font-size: 1.9em;
		} 
	}
`