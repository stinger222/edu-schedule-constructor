import styled from 'styled-components';


export const StyledAddRingSchdeulesPage = styled.div`

  & .range {
    display: grid;
    grid-template-columns: 5.3em 6.5em 5.3em;
    justify-content: center;
    margin-bottom: 0.8em;
  }

  & .range input {
		padding-left: 0.5em
	}

	& .range .start {
		grid-column: 1 / 2;
	}
	
	& .range .end {
		grid-column: -2 / -1;
	}
	
	& .range h2 {
		grid-column: 2 / 3;
		text-align: center;
		font-size: 0.8em;
		font-weight: 500;
		line-height: 1.7em;
		margin-inline: 1.5em;
		margin-top: 0.7em;
		border-bottom: 0.12em solid #d5d5d5;
	}

  & .add_button {
    display: block;
    padding: 0 0 0.1em 0;
    margin-inline: auto;
        
    font-weight: 500;
    font-size: 2.2em;
    line-height: 0.75em;

    width: 0.9em;
    height: 0.9em; 
  }

  & button[type='submit'] {
    display: block;
    margin-inline: auto;
    margin-top: 2em;
    font-size: 1.1em;
  }

`