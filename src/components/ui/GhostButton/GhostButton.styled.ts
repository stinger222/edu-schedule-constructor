import styled from "styled-components";

// (!) Current appearance is temporal and will match desired one later!!!

export const StyledGhostButton = styled.button`
	background: transparent;
	position: relative;

	font-size: 1em;
	font-weight: 400;
	letter-spacing: 0.05em;
	color: ${({theme}) => theme.colors.secondary};

	display: flex;
	align-items: center;
	justify-content: center;

	height: 3em;
	max-height: 3em;
	width: 100%;

	margin-inline: auto;
	padding: 1.8em;

	border-radius: 1em;
	box-shadow: 0 0 0 0.1em ${({theme}) => theme.colors.secondary};

	& > span {
		font-size: 1.5em;
	}

	& > span > span.plus {
		font-size: 2em;
		font-weight: 100;
	}

	& > span:has(.plus) {
		line-height: 2em
	}
`