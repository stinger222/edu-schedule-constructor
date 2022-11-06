import styled from "styled-components"

export const StyledAddLesson = styled.div`

  & .wrapper {
    width: 55%;
    margin: 0 auto;
    font-size: 1em;
  }

  & .lesson_name input {
    width: 100%;
    margin-bottom: 0.5em;
  }

  & .same_line {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  & .teacher_name input {
    width: 10em;
  }

   & .cabinet input {
    width: 3.5em;
  }
  
  & .cabinet, & .teacher_name {
    display: inline-block;
  } 
`