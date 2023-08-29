import styled from "styled-components"

export const StyledComposedSchedule = styled.div`
	width: 37em;
	height: fit-content;
	padding: 0 0.3em 1em 0.3em;
  position: relative;

	border-radius: 1.3em;
	border: 0.08em solid #00000035;
	box-shadow: ${({theme}) => theme.boxShadows.primary};
	background: ${({theme}) => theme.backgrounds.secondary};
	
	& > header {
		line-height: 1em;
		font-size: 1.9em;
		font-weight: 400;
		letter-spacing: 0.05em;
		padding-block: 0.9em;
		text-align: center;
	}

  & > button.activate {
    all: unset;
    border: 0.05em solid black;
    border-radius: 10em;
    padding: 0.1em 0.3em;
    position: absolute;
    line-height: 1.1em;
    top: 1em;
    right: 1em;
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
`