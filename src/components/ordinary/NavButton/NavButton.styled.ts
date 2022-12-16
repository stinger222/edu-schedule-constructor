import styled from "styled-components";

export const StyledNavButton = styled.div`
	width: 3.5em;
	display: inline-block;
	cursor: pointer;
	user-select: none;
	position: relative;

	& > div {
		text-align: center;
		font-size: 2em;
		line-height: 1.1em;
	}

	& .caption {
		font-weight: 200;
	}

	& .day {
		font-weight: 400;
	}

	&.selected {
		color: royalblue !important;
	}
	
	&.selected > * {
		font-weight: 500;
		transform: scale(1.1);
	}

	&.selected:after {
		content: '';
		position: absolute;
		left: 12%;
		right: 12%;
		bottom: -0.4em;
		height: 0.2em;
		background: currentColor;
	}
	
`