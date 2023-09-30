import styled from "styled-components"

export const StyledClassSchedulesPage = styled.div`
	@media(max-width: 500px) {
		& .class-schedule-cards {
			font-size: 1.1em
		}

		& header h1 {
			font-size: 1.8em;
		}
	}

	@media(max-width: 450px) {
		& .class-schedule-cards {
			font-size: 1.2em
		}
	}

	@media(max-width: 400px) {
		& .class-schedule-cards {
			font-size: 1.3em
		}
		
		& header h1 {
			font-size: 1.9em;
		}
	}
`