import styled from "styled-components"

export const StyledAuthPage = styled.div`
  font-size: 0.95em;
  padding-inline: 1em;

  & .section-divider {
    margin-block: 1.35em;
  }

  & p {
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

  & a.no-account-yet {
    display: block;
    height: 1em;
    width: 100%;
    
    text-align: center;
    font-size: 1.05em;
    font-weight: 200;

    position: relative;
    top: -3.2em;
  }

  & .gh-icon {
    width: 2em;
    height: 2em;
    margin-top: 2em;
  }

  @media (max-width: 625px) {
    & {
      font-size: 1.2em;
    }
  }

  @media (max-width: 425px) {
    & {
      font-size: 1.5em;
    }

    & h1 {
      font-size: 1.8em;
    }
  }
`