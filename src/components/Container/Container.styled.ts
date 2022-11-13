import styled from "styled-components"; 

const StyledContainer = styled.div`
	max-width: 400px;
	margin: 0 auto;
	
	@media (max-width: 405px) {
		& {
			font-size: 3.83vw;
			padding: 0 0.5em
		}
	}

	@media (min-width: 800px) {
		& {
			padding: 0;
			max-width: 650px;
			font-size: 1.325em;
		}
	}

	@media (min-width: 2400px) {
		& {
			padding: 0;
			max-width: 950px;
			font-size: 2.5em;
		}
	}
`

export default StyledContainer