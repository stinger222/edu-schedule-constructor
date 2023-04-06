import styled from "styled-components";

export const StyledAddComposedSchedule = styled.div`
	& form {
		padding-inline: 0.5em;
	}

	& form > * {
		width: 100%;
	}

	& form .input-container:has(input[name="name"]) {
		font-size: 1.3em;
	}

	& form > h2 {
		text-align: center;
		font-weight: 500;
		margin-block: 1.5em 0.7em;
	}

	& form > .btn-ghost {
		font-size: 0.8em;
		height: 17em;
		width: 100%;
	} 
 
	& form > .btn-ghost > span {
		font-size: 2em;
	}

	& form > div.error-message {
		margin-top: 2em;
		text-align: center;
		font-weight: 400;
		color: red;
		font-size: 1.4em;
	}

	& form > button[type="submit"] {
		margin-top: 2em;
		width: fit-content;
		display: block;
		margin-inline: auto;
		font-size: 1.6em;
	}

	@media(max-width: 450px) {
		& form {
			font-size: 1.1em;
		}
		
		& h2 {
			font-size: 1.6em;
		}
	}
`