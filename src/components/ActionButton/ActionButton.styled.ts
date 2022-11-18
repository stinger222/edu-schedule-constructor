import styled from "styled-components";


export const StyledActionButton = styled.button`
	appearance: none;
  outline: none;
  border: none;
	background: black;
	color: white;
	border-radius: 10em;
	font-size: 0.9em;
  padding: 0.3em 0.5em;

	&:hover {
		background: #313131;
		cursor: pointer;
	}

	&:active {
		transform: scale(0.95);
	}
`