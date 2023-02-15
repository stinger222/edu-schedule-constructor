import styled from "styled-components";

export const StyledAddRingsSchedule = styled.div`
	& .btn {
		display: block;
		margin-inline: auto;
	}

	& .append {
		font-size: 1.3em;
		margin-top: 1.5em;
	}

	@media (max-width: 400px) {
		& form {
			font-size: 1.1em;
		}

		& .append {
			font-size: 1.5em;
		}

		& button[type=submit] {
			font-size: 1.6em;
		}
	}
`