import styled from "styled-components"; 

const StyledContainer = styled.div`
	max-width: 400px;
	margin: 0 auto;
	
	@media (max-width: 400px) {
		& {
			font-size: 3.83vw;
			padding: 0 0.5em
		}
	}

	@media (min-width: 800px) {
		& {
			padding: 0;
			max-width: 650px;
			font-size: 1.625em;
		}
	}
`

export default StyledContainer