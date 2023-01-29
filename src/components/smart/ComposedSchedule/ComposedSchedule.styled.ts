import styled from "styled-components";

export const StyledComposedSchedule = styled.div`
	width: 38em;
	height: fit-content;
	padding: 0 0.3em 1em 0.3em;
	margin-inline: auto;
	
	border-radius: 1.5em;
	box-shadow: ${({theme}) => theme.boxShadows.primaryShadow};
	background: ${({theme}) => theme.colors.cardBg};
	
	& > header {
		line-height: 1em;
		font-size: 1.9em;
		font-weight: 400;
		letter-spacing: 0.05em;
		padding-block: 0.9em;
		text-align: center;
	}

	& .days {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.6em;
		row-gap: 0.7em;
	}
`