import styled from "styled-components"

export const StyledTextarea = styled.div`
  width: 100%;
  
  & > .label {
		font-size: 1.1em;
    padding-left: 0.5em;
	}
  
  & textarea {
    font-size: 0.7em;

    width: 100%;
    height: 10em;
    padding: 0.2em 0.5em;
    margin-top: 0.8em;

    border-radius: 0.45em;
    border: 0.1em solid  ${({theme}) => theme.input.border};

    background: ${({theme}) => theme.input.background};
    color: ${({theme}) => theme.text.primary};
    box-shadow: 0.1em 0.15em 0.2em 0 #00000015;

    resize: none;
  }

  & textarea::-webkit-scrollbar {
    width: 0;
  }
`