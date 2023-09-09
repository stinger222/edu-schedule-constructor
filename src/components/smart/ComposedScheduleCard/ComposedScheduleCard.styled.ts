import styled from "styled-components"

export const StyledComposedSchedule = styled.div`
	width: 37em;
	height: fit-content;
	padding: 0 0.3em 1em 0.3em;
  position: relative;

	border-radius: 1.3em;
	border: 0.08em solid #00000035;
	background: ${({theme}) => theme.composedScheduleCard.background};
	box-shadow: ${({theme}) => theme.composedScheduleCard.boxShadow};
	
  & > header {
    position: relative;
    padding-block: 1.2em;
  }

  & > header > input.switch {
    position: absolute;
    right: 0.5em;
    top: 50%;
    transform: translateY(-55%);
  }

	& > header .title {
		line-height: 1em;
		font-size: 1.9em;
		font-weight: 400;
		letter-spacing: 0.05em;
		text-align: center;
    width: 100%;
	}

	& .days {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.6em;
		row-gap: 0.7em;
	}

	& .days > * {
		flex-basis: calc(33% - 0.4em);
	}

  @media(min-width: 700px) {
    & > header > input.switch {
      font-size: 0.8em;
    }
  }
`