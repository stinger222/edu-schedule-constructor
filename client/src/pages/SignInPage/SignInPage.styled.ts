import styled from "styled-components"

export const StyledSignInPage = styled.div`
  font-family: 'JetBrains Mono';

  & h1 {
    text-align: center;
    font-size: 2.1em;
    margin: 2em 0 3em 0;
  }
  
  & .login-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 1.6em;
    margin-bottom: 6em;

    font-size: 1.1em;
    
    border-radius: 1.1em;
    box-shadow: ${({theme}) => theme.classCard.boxShadow}; // temp... I guess
  }

  & .login-card > h2 {
    font-weight: 500;
    margin-bottom: 1.5em;
  }

  & .login-card > h2 .g-red {
    color: #E7452F
  }
  
  & .login-card > h2 .g-blue {
    color: #0057FF
  }

  & .login-card > h2 .g-yellow {
    color: #EDB900
  }

  & .login-card > h2 .g-green {
    color: #339E0E
  }

  & p {
    margin: 1.3em 0 1.8em 0;
    text-align: center;
    font-size: 1.2em;
    font-weight: 200;
    color: #939393
  }

  & a {
    color: #3F3F3F;
    font-weight: 500;
    text-decoration: underline;
  }
`