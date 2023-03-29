import styled from "styled-components";

export const StyledLessonsPage = styled.div`
	@media(max-width: 500px) {
		& .lesson-cards {
			font-size: 1.1em;
		}

		& header h1 {
			font-size: 1.8em;
		} 
	}

	@media(max-width: 450px) {
		& .lesson-cards {
			font-size: 1.2em;
		}
	}

	@media(max-width: 400px) {
		& .lesson-cards {
			font-size: 1.3em;
		}

		& header h1 {
			font-size: 1.9em;
		} 
	}
`