import styled from "styled-components";

export const StyledInput = styled.div`
	& > .caption {
		position: absolute;
		top: -1.4em;
		left: 0.5em;
		
		font-size: 1.1em;
	}

	& > input {
		position: relative;
		font-size: 2em;

		height: 1.4em;
		padding: 0.2em 0.2em;
		
		border-radius: 0.4em;
		border: 0.05em solid  ${({theme}) => theme.colors.secondary};

		background: ${({theme}) => theme.colors.cardBg};
		color: ${({theme}) => theme.colors.textPrimary};
	}
`