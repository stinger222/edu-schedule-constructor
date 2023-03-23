import styled from "styled-components";

export const StyledRingsCard = styled.div`

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	border-radius: 1em;
	box-shadow: ${({theme}) => theme.boxShadows.primary};
	background: ${({theme}) => theme.backgrounds.secondary};
	
	width: 29.5em;
	height: 7em;
	padding: 1em 0.8em;
	
	text-align: center;

	& header {
		font-size: 1.5em;
		font-weight: 400;
		margin-bottom: 0.6em;
	}

	& .details {
		display: flex;
		justify-content: space-around;
		gap: 1em;

		font-size: 1.2em;
		font-weight: 200;
		word-spacing: -0.25em;
	}

	& .details .value {
		font-weight: 500;
	}
`