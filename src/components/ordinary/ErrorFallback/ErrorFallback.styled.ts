import styled from "styled-components"

export const StyledErrorFallback = styled.div`
  padding-inline: 1em;

  // ======== Shared: ========

  & .header {
    text-align: center;
    margin-bottom: 0.5em;
  }

  & .message-wrapper {
    border-radius: 1em;
  }

  & .message {
    text-align: center;
    font-weight: 500;
    text-wrap: balance;
    font-size: 1.2em;
    padding: 0.8em;
  }

  // ======== Error: ========

  & .error-header {
    color: #f22f2f;
  }

  & .error-message-wrapper {
    background: #f22f2f13;
  }

  & .error-message {
    color: red;
  }

  // ======== Warning: ========
  
  & .warning-header {
    color: #f5cd11;
  }

  & .warning-message-wrapper {
    background: #ffb90424;
  }
  
  & .warning-message {
    color: #ffc800;
  }
  
  // ======== EmptyDay: ========

  & .empty-day-header {
    color: #11A3F5;
  }

  & .empty-day-message-wrapper {
    background: #00B2FF24;
  }
  
  & .empty-day-message {
    color: #11A3F5;
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
  }
`