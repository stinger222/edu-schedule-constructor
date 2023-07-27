import styled from "styled-components"

export const StyledRingsCardsList = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > * {
		margin-bottom: 1.5em;
		width: 28em;
	}

	& .rings-schedule-card, & .animated-wrapper {
		width: 100%;
	}

	& a > * {
		width: 100%;
	}
	
	.btn-ghost {
		font-size: 0.7em;
		height: 9.8em;
	}

	& .btn-ghost span {
		font-size: 1.9em;
	}
`