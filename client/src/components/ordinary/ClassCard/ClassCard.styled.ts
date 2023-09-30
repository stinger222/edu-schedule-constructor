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

	h1 {
		display: -webkit-box;
		margin-bottom: 1em;

		line-height: 1.25em;
		font-weight: 500;
		font-size: 1.625em;

		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		text-overflow: ellipsis;
    word-wrap: break-word;
		overflow: hidden;
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

	& footer span:nth-child(1) {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		text-overflow: ellipsis;
		overflow: hidden;
    word-break: break-all;
	}
	
	& footer span:nth-child(2) {
		flex-shrink: 0;
		margin-left: 0.5em;
    word-spacing: -0.35em;
	}
`