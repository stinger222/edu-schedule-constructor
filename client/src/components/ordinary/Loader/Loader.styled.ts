import styled from "styled-components"

export const StyledLoader = styled.div`
  width: 7em;
  aspect-ratio: 1;
  border: 0.7em solid black;
  margin-top: 6em;
  margin-inline: auto;
  border-radius: 100%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: loader-spin 2s linear infinite;

  @keyframes loader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`