import styled from "styled-components"

export const StyledButton = styled.button`
  font-size: 1.5em;
	font-weight: 200;
  color: white;

  height: fit-content;
  width: fit-content;
  padding: 0.3em 0.8em;
	

  border-radius: 20em;
	box-shadow: 0.1em 0.2em 0.3em 0 #00000060;
  background: ${({theme}) => theme.button.active};

  
	&:disabled {
    opacity: 0.45;
	}
  
	&:disabled:hover {
    opacity: 0.5;
	}

  &:has(.icon), &:has(svg), &:has(img) {
    padding: 0.3em;
		display: flex;
		justify-content: center;
		align-items: center;

		height: 2em;
		width: 2em;
  }

	& .icon, & svg, & img {
		height: 100%;
		width: 100%;
  }
`