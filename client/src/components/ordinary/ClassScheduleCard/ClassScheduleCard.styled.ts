import styled from "styled-components"

export const StyledClassScheduleCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	
	border-radius: 1em;
	background: ${({theme}) => theme.classScheduleCard.background};
	box-shadow: ${({theme}) => theme.classScheduleCard.boxShadow};
	
	width: 29em;
	min-height: 7em;
  height: fit-content;
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