import styled from "styled-components";

export const StyledAddRingsSchedule = styled.div`
	& form {
		padding-inline: 4em;
	}

	& .btn {
		display: block;
		margin-inline: auto;
	}

	& .append {
		font-size: 1.3em;
		margin-block: 1em 1.5em;
	}

	& input {
		width: 5em;
	}

	@media (max-width: 640px) {
		& form {
			font-size: 1.3em;
			padding-inline: 1em;
		}
	}

	@media (max-width: 400px) {
		& .append {
			font-size: 1.4em;
		}

		& button[type=submit] {
			font-size: 1.5em;
		}
	}
`