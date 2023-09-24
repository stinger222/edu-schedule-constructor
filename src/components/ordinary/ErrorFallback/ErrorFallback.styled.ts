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
    color: ${({theme}) => theme.message.error.header};
  }

  & .error-message-wrapper {
    background: ${({theme}) => theme.message.error.background};
    border: 0.14em solid ${({theme}) => theme.message.error.border};
  }

  & .error-message {
    color: ${({theme}) => theme.message.error.text};
  }

  // ======== Warning: ========
  
  & .warning-header {
    color: ${({theme}) => theme.message.warning.header};
  }

  & .warning-message-wrapper {
    background: ${({theme}) => theme.message.warning.background};
    border: 0.14em solid ${({theme}) => theme.message.warning.border};
  }
  
  & .warning-message {
    color: ${({theme}) => theme.message.warning.text};
  }
  
  // ======== EmptyDay: ========

  & .day-off-header {
    color: ${({theme}) => theme.message.emptyDay.header};
  }

  & .day-off-message-wrapper {
    background: ${({theme}) => theme.message.emptyDay.background};
    border: 0.14em solid ${({theme}) => theme.message.emptyDay.border};
  }
  
  & .day-off-message {
    color: ${({theme}) => theme.message.emptyDay.text};
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