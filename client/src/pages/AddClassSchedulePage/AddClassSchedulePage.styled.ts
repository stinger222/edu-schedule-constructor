import styled from "styled-components"

export const StyledAddClassSchedulePage = styled.div`
	& form {
		padding-inline: 3em;
		font-size: 1.3em;
	}

	& form input[name="name"] {
		width: 100%;
		margin-bottom: 1em;
	}

	& form .btn {
		display: block;
		font-size: 1em;
	}

  & form .controls {
    display: flex;
    justify-content: center;
    margin-bottom: 1.5em;
    gap: 1.2em;
  }

  & form .btn[type="submit"] {
    width: 5.5em;
    margin-inline: auto;
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