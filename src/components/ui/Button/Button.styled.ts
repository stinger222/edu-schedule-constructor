import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1em;
  color: white;

  height: fit-content;
  width: fit-content;
  padding: 0.2em 0.6em;

  border-radius: 20em;
  background: black;
  
  appearance: none;
  outline: none;
  border: none;
  cursor: pointer;

  &:has(svg), &:has(img) {
    padding: 0.3em;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    transform: scale(0.98);
  }
`