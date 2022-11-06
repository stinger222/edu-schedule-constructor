import styled from "styled-components";


export const StyledInput = styled.div`
  & .caption {
    font-size: 0.7em;
    padding-left: 0.2em;
    font-weight: 300;
  }

  & input {
    appearance: none;
    border: 0.0625em solid black;
    border-radius: 0.45em;
    padding: 0.2em;
    outline: none;
    margin-inline: 0.1em;
    font-size: 0.9em;
  }
    
  & input::placeholder {
    color: #BBBBBB;
  }
`
