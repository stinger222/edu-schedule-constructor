import styled from "styled-components";

export const StyledInput = styled.div`
	position: relative;
	padding: 0.7em 0;

	& > .caption {
		position: absolute;
		top: 0.2em;
		left: 0.3em;
		font-size: 1.1em;
	}

	& > input {
		font-size: 1.2em;

		width: 100%;
		height: 1.8em;
		padding: 0.2em 0.5em;
		margin-top: 0.8em;
		
		border-radius: 0.45em;
		border: 0.05em solid  ${({theme}) => theme.colors.secondary};

		background: ${({theme}) => theme.backgrounds.secondary};
		color: ${({theme}) => theme.text.primary};
		box-shadow: 0.1em 0.15em 0.2em 0 #00000015;
	}
`