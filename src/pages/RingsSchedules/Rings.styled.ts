import styled from "styled-components"

export const StyledRingsPage = styled.div`
	@media(max-width: 500px) {
		& .rings-cards {
			font-size: 1.1em
		}

		& header h1 {
			font-size: 1.8em;
		}
	}

	@media(max-width: 450px) {
		& .rings-cards {
			font-size: 1.2em
		}
	}

	@media(max-width: 400px) {
		& .rings-cards {
			font-size: 1.3em
		}
		
		& header h1 {
			font-size: 1.9em;
		}
	}
`