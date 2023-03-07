import styled from "styled-components";

export const StyledAddComposedSchedule = styled.div`

& .compose-day {
		margin-inline: auto;

		padding: 0 0.5em;
		width: 38em;
	}

	& .compose-day h2 {
		text-align: center;
	}

	& form {
		width: 70%;
		position: relative;
		margin-inline: auto;
		padding: 0.6em;
		border: 0.06em solid black;
		border-radius: 1em;
	}

	& form .hr-divider {
		height: 0.5em;
		background: #FFFFFF;
		box-shadow: 
			0 0.2em 0.3em -0.05em #00000040,
			0 0.1em 0.15em -0.05em #00000020;
		transform: translateX(-2.3%);
		width: 104.7%;
		margin-block: -0.1em 0.5em;
	}

	& form .btn-ghost {
		font-size: 0.55em;
	}

	& form .btn-ghost span {
		font-size: 1.7em;
	}

	@media (max-width: '???px') {
		/* form fontSize = ~1.6 */
	}
`