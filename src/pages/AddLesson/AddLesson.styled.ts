import styled from "styled-components";

export const StyledAddLesson = styled.div`
	& form {
		display: grid;
		grid-template-columns: repeat(20, 1fr);
		grid-template-rows: 1fr 1fr 0 1fr;
		gap: 0.9em;
		row-gap: 1.5em;
		
		font-size: 1.2em;
		padding-inline: 2em;
	}

	& .title {
		grid-column: 1 / -1;
		grid-row: 1 / 2;
	}

	& .teacher {
		grid-column: 1 / -5;
		grid-row: 2 / 3;
	}

	& .cabinet {
		grid-column: -5 / -1;
		grid-row: 2 / 3;
	}

	& button[type=submit] {
		grid-column: 8 / -8;
		grid-row: 4 / 5;
		
		width: auto;
		font-size: 1.2em;
		margin-inline: 0.5em;
	}

	@media (max-width: 640px) {
		body:has(&) .app-header h1 {
			font-size: 1.8em;
		}

		& form {
			font-size: 1.3em;
			padding-inline: 0.6em;
		}

		& .teacher {
			grid-column: 1 / -5;
			grid-row: 2 / 3;
		}

		& .cabinet {
			grid-column: -5 / -1;
			grid-row: 2 / 3;
		}

		& button[type=submit] {
			font-size: 1.4em;
			margin-inline: 0;
		}
	}
`