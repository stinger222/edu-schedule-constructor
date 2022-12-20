import styled from "styled-components";

export const StyledLessonCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	border-radius: 1em;
	box-shadow: 0px 0.125em 0.3125em 0.0625em #00000040;

	
	width: 29.6875em;
	height: 8.4375em;
	
	letter-spacing: -0.025em;
	padding: 0.6em 0.8em;
	
	h1 {
		line-height: 1.15em;
		font-weight: 500;
		font-size: 1.625em;
		/* todo: 2 lines max */
	}

	& footer {
		display: flex;
		justify-content: space-between;

		font-family: Inter;
		font-weight: 500;
		font-size: 1.2em;
		line-height: 1em;
		letter-spacing: 0;
		color: #8B8B8B;
	}
`