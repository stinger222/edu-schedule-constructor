import styled from "styled-components"

export const StyledAddRingsSchedulePage = styled.div`
	& form {
		padding-inline: 4em;
		font-size: 1.2em;
	}

	& form input[name="name"] {
		width: 100%;
		margin-bottom: 1em;
	}

	& form .btn {
		display: block;
		margin-inline: auto;
		font-size: 1em;
	}

  & form .btn[type="submit"] {
    width: 5.5em;
  }

	& form .append {
		margin-block: 1em 1.5em;
	}

	& form input {
		width: 6em;
	}

	@media (max-width: 640px) {
		& form {
			font-size: 1.5em;
			padding-inline: 1em;
		}

		& form button {
			font-size: 1.2em !important;
		}

	}
`