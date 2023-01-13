import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1em;
  color: white;

  height: fit-content;
  width: fit-content;
  padding: 0.3em 0.8em;

  border-radius: 20em;
  background: black;

  &:has(svg), &:has(img) {
    padding: 0.3em;
  }
`