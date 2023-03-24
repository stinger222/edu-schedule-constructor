import styled from "styled-components";

export const StyledSwipeToAction = styled.div`
	position: relative;
	z-index: 5;
	width: fit-content;
	border-radius: 1.4em;

	& .animated-wrapper {
		position: relative;
		z-index: 5;
		width: fit-content;
		user-select: none;
	}

	& .action-label {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 20%;
		z-index: 4;
		background: blue;
		font-weight: 400;
		font-size: 1.2em;
		border-top-right-radius: 1.4em;
		border-bottom-right-radius: 1.4em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`