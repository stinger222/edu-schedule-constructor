import styled from "styled-components"

export const StyledRingsCardsList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

  --action-label-icon-size: 2.3em;  /* 2em by default */
  --action-label-border-radius: 1.3em;  /* 1.3em by default */

	& > * {
		margin-bottom: 1.5em;
	}
  
	.btn-ghost {
		font-size: 0.7em;
		height: 9.8em;
    width: calc(28em * 1.47);
	}

	& .btn-ghost span {
		font-size: 1.9em;
	}
`