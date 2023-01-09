import styled from "styled-components";

export const StyledComposedSchedule = styled.div`
	width: 39em;
	height: fit-content;
	padding: 0 0.3em 1em 0.3em;
	margin-top: 2em; // temp

	border-radius: 1em;
	box-shadow: 0 0.125em 0.35em 0.06em rgba(0, 0, 0, 0.25);
	
	& > header {
		line-height: 2.4em;
		font-size: 1.7em;
		font-weight: 400;
		letter-spacing: 0.05em;
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