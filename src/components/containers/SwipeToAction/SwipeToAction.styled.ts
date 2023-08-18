import styled from "styled-components"

export const StyledSwipeToAction = styled.div`
	/* height: fit-content !important; */
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
		width: 23%;
		z-index: 4;
    
    color: white;
		font-weight: 400;
		font-size: 1.2em;

		display: flex;
		justify-content: center;
		align-items: center;
  }

	& .right-action-label {
		right: 0;

		border-top-right-radius: 1.4em;
		border-bottom-right-radius: 1.4em;
	}

  & .left-action-label {
		left: 0;

		border-top-left-radius: 1.4em;
		border-bottom-left-radius: 1.4em;
	}
`