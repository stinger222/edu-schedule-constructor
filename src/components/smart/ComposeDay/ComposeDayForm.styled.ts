import styled from "styled-components"

export const StyledComposeDayForm = styled.div`
	background: inherit;
	margin-inline: auto;
	width: fit-content;

	& > h2 {
		text-align: center;
		margin-block: 1.5em 0.7em;
		font-weight: 500;
	}

	& .compose-day {
		font-size: 1.4em;
		background: ${({theme}) => theme.composedScheduleCard.background};
		/* background: blue; */
    
		margin-inline: auto;
		padding: 0.6em;
    
		/* box-shadow: $ {({theme}) => theme.boxShadows.primary}; */
		box-shadow: ${({theme}) => theme.composedScheduleCard.boxShadow};
		border: 0.06em solid #60606040;
		border-radius: 1em;
	}

	& .compose-day .fade-divider {
		height: 0.5em;
		background: transparent;
		box-shadow:
			0 0.2em 0.3em -0.05em #00000040,
			0 0.1em 0.15em -0.05em #00000020;
		transform: translateX(-2.4%);
		width: 105%;
		margin-block: -0.1em 0.5em;
	}

	& button.custom-select-clear {
		background: none;
		color: ${({theme}) => theme.text.secondary};
		font-size: 1.6em;
		font-weight: 100;
	}

	& .compose-day .btn-ghost {
		width: 100%;
		height: 3.2em;
		font-size: 0.7em;
	}

	& .compose-day .btn-ghost span {
		font-size: 1.5em;
	}

	@media (max-width: '???px') {
		/* form fontSize = ~1.6 */
	}
`