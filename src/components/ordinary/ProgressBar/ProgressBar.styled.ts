import styled from "styled-components";

export const StyledProgressBar = styled.div`
	display: flex;
	width: 6.5em;

	& .caption {
		height: 100%;
		width: 75%;
		font-size: 1.5em;
		margin-right: 0.4em;
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
		width: 1em;
		height: 1em;
		background: transparent;
		box-shadow: 0 0 0 0.15em #0075FF inset;
		border-radius: 5em;
		margin-inline: auto;
		margin-bottom: 0.4em;
	}

	&.active .progress_bar_body .indicator {
		height: 1.3em;
		width: 1.3em;
		position: relative;
		box-shadow: 0 0 0 0.13em #0075FF inset;
	}

	&.active .progress_bar_body .indicator:after {
		content: "";
		position: absolute;
		inset: 50%;
		transform: translate(-50%, -50%);
		height: 0.4em;
		width: 0.4em;
		box-shadow: 0 0 0 0.113em #0075FF;
		/* box-shadow: 0 0 0 0.2em red; */
		border-radius: 10em;
		background: #0075ff;
	}
	
	& .progress_bar_body .line {
		width: 0.25em;
		height: calc(100% - 0.8em);
		border-radius: 1em;
		background: #0075FF;
		margin-inline: auto;
	}
`

