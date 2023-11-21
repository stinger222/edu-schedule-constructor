import styled from "styled-components"

export const StyledAuthForm = styled.div`
  & h1 {
    text-align: center;
    font-size: 2em;
    margin: 2em 0 3em 0;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 1.35em 2em 2em 2em;
    margin-inline: auto;
    margin-bottom: 5.5em;

    font-size: 0.9em;
    
    border-radius: 1.1em;
    background:  ${({theme}) => theme.classCard.background};
    box-shadow: ${({theme}) => theme.classCard.boxShadow};
  }

  & h2 {
    text-align: center;
    font-size: 1.9em;
    font-weight: 500;
    margin-bottom: 0.6em;
  }

  & form > .input-container {
    width: 25em;
    max-width: 100%;
    flex-basis: 100%;
  }

  & form button[type="submit"] {
    margin-top: 1em;
    font-size: 1.35em;
  }
`