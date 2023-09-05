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
	background: ${({theme}) => theme.backgrounds.primary};
  
	border-radius: 1em;
	box-shadow: 0 0 0 0.07em ${({theme}) => theme.borders.secondary}, 0.2em 0.3em 0.4em 0 rgb(0 0 0 / 45%);

	z-index: 350;
  overflow: hidden;
  transition: height .5s ease;

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
    box-sizing: border-box;
  }

  & .dropdown-content header {
    width: 100%;

    font-weight: 400;
    font-size: 1.4em;
    text-align: center;
    line-height: 0.9;
  }
  
  & .dropdown-content button {
		/* TODO: Make buttons bigger on mobile */
    width: 100%;
		height: 2em;
    font-family: inherit;
    font-size: 1.15em;
    font-weight: 200;
		background: ${({theme}) => theme.buttons.secondary};
		box-shadow: ${({theme}) => theme.boxShadows.secondary};
  }

  & .divider {
    max-height: 0;
    width: 100%;
    box-shadow: 0 0 0.02em 0.03em #bdbdbd;
    margin: 0.2em 0;
  }


  /* React-transition-group classes: */

  & .mainMenuEnterActive {
    position: absolute;
    transform: translateX(150%);
  }

  & .mainMenuEnterDone {
    transform: translateX(0);
    transition: all .5s ease;
  }

  & .mainMenuExitActive {
    transform: translateX(150%);
    transition: all .5s ease;
  }

  & .mainMenuExitDone {
    transform: translateX(-150%);
  }

  & .settingsMenuEnterActive {
    position: absolute;
    transform: translateX(-150%);
  }

  & .settingsMenuEnterDone {
    transform: translateX(0);
    transition: all .5s ease;
  }

  & .settingsMenuExitActive {
    transform: translateX(-150%);
    transition: all .5s ease;
  }

  & .settingsMenuExitDone {
    transform: translateX(150%);
  }

  & a:has(button) {
    width: 100%;
  }
`