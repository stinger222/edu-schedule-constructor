import styled from "styled-components";

export const StyledRingCard = styled.div`
	
	border-radius: 1em;
	box-shadow: ${({theme}) => theme.boxShadows.primaryShadow};
	background: ${({theme}) => theme.colors.cardBg};
	
	width: 29.5em;
	padding: 0.5em 0.8em;
	
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