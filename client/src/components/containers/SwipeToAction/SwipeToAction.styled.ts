import styled from "styled-components"

export const StyledSwipeToAction = styled.div`
	position: relative;
	z-index: 5;
	border-radius: 1.4em;

	& .animated-wrapper {
		position: relative;
		z-index: 5;
		width: fit-content;
		user-select: none;
	}

  & .action-label {
    position: absolute;
		top: 1px;
		bottom: 1px;
		width: 25%;
		z-index: 4;
    
    color: white;
		font-weight: 400;

		display: flex;
		align-items: center;
    justify-content: center;
  }

  & .action-label svg {
    height: var(--action-label-icon-size);
    width: var(--action-label-icon-size);
    fill: white;
  }
  
	& .right-action-label {
    right: 1px;
		border-top-right-radius: var(--action-label-border-radius);
		border-bottom-right-radius: var(--action-label-border-radius);
	}

  & .right-action-label svg {
    transform: translateX(30%)
  }
  
  & .left-action-label {
    left: 1px;
		border-top-left-radius: var(--action-label-border-radius);
		border-bottom-left-radius: var(--action-label-border-radius);
	}

  & .left-action-label svg {
    transform: translateX(-30%)
  }
`