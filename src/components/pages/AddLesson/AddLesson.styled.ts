import styled from "styled-components"

export const StyledAddLessonPage = styled.form`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: 1fr 1fr 0.1em 1.7em;
  row-gap: 0.5em;
  column-gap: 0.5em;
	font-size: 1.2em;

  & #lesson_name {
    grid-column: 3 / -3;
  }

  & #teacher_name {
    grid-row: 2 / 3;
    grid-column: 3 / -6;
  }
  
  & #cabinet {
    grid-row: 2 / 3;
    grid-column: -6 / -3;
  }
	
	& .submit_button {
		grid-row: -2 / -1;
		grid-column: 7 / 11;
	}

	@media (max-width: 799px) {
		& {
			font-size: 1.5em;
		}

		& #lesson_name {
    	grid-column: 2 / -2;
  	}
		
		& #teacher_name {
			grid-column: 2 / -5;
		}
		
		& #cabinet {
			grid-column: -5 / -2;
		}
	}
`