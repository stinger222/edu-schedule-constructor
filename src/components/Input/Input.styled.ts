import styled from "styled-components";


export const StyledInput = styled.div`
  & .caption {
    font-size: 0.7em;
    padding-left: 0.2em;
		margin-bottom: 0.2em;
    font-weight: 300;
  }

  & input {
    appearance: none;
    border: 0.0625em solid black;
    border-radius: 0.45em;
    padding: 0.2em;
    outline: none;
    font-size: 0.9em;
    width: 100%;
		height: 1.9em;
  }

  & .invalid:is(input) {
    border-color: #ee1313;
    border-width: 0.0725em;
  }
    
  & input::placeholder {
    color: #BBBBBB;
  }
`
