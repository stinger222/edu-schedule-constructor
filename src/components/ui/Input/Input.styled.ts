import styled from "styled-components";

export const StyledInput = styled.div`
	position: relative;
	
	& > .caption {
		position: absolute;
		top: -0.05em;
		left: 0.5em;
		font-size: 1.1em;
	}

	& > input {
		font-size: 2em;

		height: 1.4em;
		padding: 0.2em 0.2em;
		margin-top: 0.8em;
		
		border-radius: 0.4em;
		border: 0.05em solid  ${({theme}) => theme.colors.secondary};

		background: ${({theme}) => theme.colors.cardBg};
		color: ${({theme}) => theme.colors.textPrimary};
	}
`