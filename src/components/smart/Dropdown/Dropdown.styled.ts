import styled from "styled-components"

export const StyledDropdown = styled.div`
	--dropdown-font-size: 1.1;
	--dropdown-margin-top: 1em;
	
  font-size: calc(1em * var(--dropdown-font-size));
  font-family: 'JetBrains Mono';
  user-select: none;

	width: 20em;
	min-width: 17em;
  padding: 0.7em 0.8em;
	background: ${({theme}) => theme.dropdown.background};
  
	border-radius: 1em;
	box-shadow: 0 0 0 0.07em ${({theme}) => theme.dropdown.border}, ${({theme}) => theme.dropdown.boxShadow};
  box-sizing: content-box;

	z-index: 350;
  overflow: hidden; 
  transition: height .4s ease;

	position: absolute;
	right: 1em;

	/* even if dropdown font-size will be changed,
	it's position relative to header will be the same */
	top: calc(1 / var(--dropdown-font-size) * var(--header-height) + var(--dropdown-margin-top));

  & .dropdown-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6em;
  }

  :is(&) :is(h1, h2, h3) {
    width: 100%;
    text-align: center;
    line-height: 0.9;
  }
  
  & h1 {
    font-weight: 400;
    font-size: 1.4em;
  }

  & h2 {
    font-weight: 400;
    font-size: 1.2em;
  }

  & .dropdown-content .impex-controls {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  & .dropdown-content .impex-controls > * {
    flex-basis: 48%;
  }
  
  & .dropdown-content button {
		/* TODO: Make buttons bigger on mobile */
    width: 100%;
		height: 2em;
    font-family: inherit;
    font-size: 1.15em;
    font-weight: 200;
		background: ${({theme}) => theme.dropdown.buttons};
		box-shadow: ${({theme}) => theme.dropdown.buttonBoxShadow};
  }

  & .dropdown-content .mantine-Select-root {
    font-size: 1.2em;
  }
  
  & .dropdown-content .mantine-Select-label {
    font-size: 0.9em;
  }


  & .section-divider {
    max-height: 0;
    width: 100%;
    box-shadow: 0 0 0.02em 0.03em ${({theme}) => theme.dropdown.divider};
    margin: 0.2em 0;
  }

  /* React-transition-group classes: */

  & .mainMenuEnterActive {
    position: absolute;
    transform: translateX(150%);
  }

  & .mainMenuEnterDone {
    transform: translateX(0);
    transition: all .4s ease;
  }

  & .mainMenuExitActive {
    transform: translateX(130%);
    transition: all .4s ease;
  }

  & .settingsMenuEnterActive {
    position: absolute;
    transform: translateX(-130%);
  }

  & .settingsMenuEnterDone {
    transform: translateX(0);
    transition: all .4s ease;
  }

  & .settingsMenuExitActive {
    transform: translateX(-130%);
    transition: all .4s ease;
  }

  & a:has(button) {
    width: 100%;
  }
`