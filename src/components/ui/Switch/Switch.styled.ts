import styled from "styled-components"

export const StyledSwitch = styled.input`
  --transition-duration: 0.3s;
  
  appearance: none;
  position: relative;

  font-size: 1em;
  width: 4em;
  height: 2em;

  box-shadow: inset 0 0 0.4em #00000060;
  border-radius: 10em;
  background: white;

  transition-property: left right;
  transition: var(--transition-duration);

  &:after {
    content: "";
    position: absolute;
    top: 0em;
    left: 0;

    width: 2em;
    height: 2em;

    border-radius: 10em;
    box-shadow: 0 0 0.4em 0em #00000060;
    background: white;
    
    transform: scale(1.05);
    transition: all var(--transition-duration);
  }

  &:checked {
    background: ${({theme}) => theme.colors.primary}99;
    box-shadow: none;
  }
  
  &:checked::after {
    left: 100%;
    transform: translateX(-100%) scale(1.05);
  }
`