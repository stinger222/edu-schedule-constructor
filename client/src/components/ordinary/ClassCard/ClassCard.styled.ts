import styled from "styled-components"

export const StyledClassCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	border-radius: 1.3em;
	background: ${({theme}) => theme.classCard.background};
	box-shadow: ${({theme}) => theme.classCard.boxShadow};

	width: 28em;
	height: fit-content;
	min-height: 7.8em;
	padding: 1.2em 0.8em 1em 0.8em;

	letter-spacing: -0.025em;

  & > * {
    user-select: none;
  }

	h1 {
    line-height: 1.25em;
		font-weight: 500;
		font-size: 1.625em;

		margin-bottom: 1em;
	}

	& footer {
		display: flex;
		justify-content: space-between;

		font-family: Inter;
		font-weight: 500;
		font-size: 1.2em;
		line-height: 1em;
		letter-spacing: 0;
    
		color: ${({theme}) => theme.text.secondary};
	}

	& footer span:nth-child(2) {
		flex-shrink: 0;
		margin-left: 0.5em;
    word-spacing: -0.35em;
    max-width: 8.2em;
	}
`