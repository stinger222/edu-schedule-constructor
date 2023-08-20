import styled from "styled-components"

export const StyledLessonCardsList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-inline: 1em;
  
  --action-label-icon-size: 2.3em;
	
	& > * {
		margin-bottom: 1.5em;
	}

	& .btn-ghost {
		font-size: 0.75em;
		height: 9em;
    width: calc(28em * 1.33);
	}

	& .btn-ghost span {
		font-size: 1.9em;
	}
`