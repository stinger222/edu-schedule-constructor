import styled from "styled-components";

export const StyledProgressBar = styled.div`
	display: flex;
	width: 6.5em;

	& .caption {
		height: 100%;
		width: 75%;
		font-size: 1.5em;
	}

	& .caption > div {
		text-align: center;
		font-weight: 600;
	}

	& .caption .caption_end {
		font-size: 0.85em;
		color: gray
	}

	& .progress_bar_body {
		height: 100%;
		width: 25%;
	}

	& .progress_bar_body .indicator {
		width: 0.9em;
		height: 0.9em;
		background: transparent;
		border: 0.2em solid #0075FF;
		border-radius: 5em;
		margin-inline: auto;
		margin-bottom: 0.4em;
	}
	
	& .progress_bar_body .line {
		width: 0.2em;
		height: calc(100% - 0.8em + 0.2em);
		border-radius: 1em;
		background: #0075FF;
		margin-inline: auto;
	}
`

