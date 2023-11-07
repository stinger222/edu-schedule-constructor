import styled from "styled-components"

export const StyledSignInPage = styled.div`
  font-family: 'JetBrains Mono';
  padding: 1em;

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
    background:  ${({theme}) => theme.classCard.background};
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
    color: ${({theme}) => theme.link.negative};
    font-weight: 500;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    & .login-card {
      font-size: 1.1em;
      padding: 1em;
    }

    & .login-card h2 {
      margin-bottom: 1.2em;
    }

    & p {
      font-size: 1.45em;
    }
  }

  @media (max-width: 400px) {
    & .login-card {
      font-size: 1.3em;
      padding: 1em;
    }

    & .login-card h2 {
      margin-bottom: 1em;
    }

    & p {
      font-size: 1.7em;
    }
  }
`