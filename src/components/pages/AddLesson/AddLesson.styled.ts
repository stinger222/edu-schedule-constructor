import styled from "styled-components"

export const StyledAddLessonPage = styled.form`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr 1fr;
  row-gap: 0.5em;
  column-gap: 0.5em;

  & #lesson_name {
    grid-column: 2 / -2;
  }

  & #teacher_name {
    grid-row: 2 / 3;
    grid-column: 2 / 5;
  }
  
  & #cabinet {
    grid-row: 2 / 3;
    grid-column: 5 / 6;
  }

	@media (max-width: 400px) {
		& {
			font-size: 1.5em;
			grid-template-columns: repeat(15, 1fr);
		}

		
		& #teacher_name {
			grid-column: 2 / -5;
		}
		
		& #cabinet {
			grid-column: -5 / -2;
		}
	}
`