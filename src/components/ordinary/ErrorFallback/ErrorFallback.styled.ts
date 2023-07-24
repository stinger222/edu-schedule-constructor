import styled from "styled-components"

export const StyledErrorFallback = styled.div`
  padding-inline: 1em;

  & h1 {
    color: #f22f2f;
    text-align: center;
    margin-bottom: 0.5em;
  }

  & .message-wrapper {
    background: #f22f2f13;
    border-radius: 1em;
  }

  & .message {
    color: red;
    text-align: center;
    font-weight: 500;
    text-wrap: balance;
    font-size: 1.2em;
    padding: 0.8em;
  }

  @supports not (text-wrap: balance) {
    & .message {
      white-space: break-spaces;
    }
  }

  @media (max-width: 430px) {
    & h1 {
      font-size: 2.5em;
    }
    
    & .message {
      font-size: 1.7em;
    }

    & .message-wrapper {
      background: #f22f2f19;
    }
  }
`