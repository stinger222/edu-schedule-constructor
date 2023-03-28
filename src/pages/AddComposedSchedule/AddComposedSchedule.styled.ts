import styled from "styled-components";

export const StyledAddComposedSchedule = styled.div`
	& form {
		padding-inline: 0.5em
	}
	& form > * {
		width: 100%;
	}

	& form > .btn-ghost {
		font-size: 0.8em;
		height: 17em;
		width: 100%;
	} 
 
	& form > .btn-ghost > span {
		font-size: 2em;
	}

	& form > h2 {
		text-align: center;
		font-weight: 500;
		margin-block: 1.5em 0.7em;
	}
`