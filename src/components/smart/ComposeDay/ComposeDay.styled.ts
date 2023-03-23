import styled from "styled-components";

export const StyledComposeDay = styled.div`
	background: inherit;
	margin-inline: auto;
	width: 38em;

	& > h2 {
		text-align: center;
		margin-block: 1.5em 0.7em;
		font-weight: 500;
	}

	& .compose-day {
		font-size: 1.4em;
		background: ${({theme}) => theme.backgrounds.secondary};

		margin-inline: auto;
		padding: 0.6em;

		box-shadow: ${({theme}) => theme.boxShadows.primary};
		border: 0.06em solid #60606040;
		border-radius: 1em;
	}

	& .compose-day .hr-divider {
		height: 0.5em;
		background: ${({theme}) => theme.backgrounds.secondary};
		box-shadow:
			0 0.2em 0.3em -0.05em #00000040,
			0 0.1em 0.15em -0.05em #00000020;
		transform: translateX(-2.1%);
		width: 104.5%;
		margin-block: -0.1em 0.5em;
	}

	& .compose-day .btn-ghost {
		font-size: 0.65em;
		padding: 1.6em;
	}

	& .compose-day .btn-ghost span {
		font-size: 1.5em;
	}

	@media (max-width: '???px') {
		/* form fontSize = ~1.6 */
	}
`