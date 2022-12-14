import styled from "styled-components";

export const StyledNavButton = styled.div`
	width: 3.5em;
	display: inline-block;
	cursor: pointer;
	user-select: none;

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

	&.active .caption, &.active .day {
		font-weight: 500;
		transform: scale(1.1);
	}
	
`