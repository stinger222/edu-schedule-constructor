import styled from "styled-components"

export const StyledComposedSchedulesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 0.5em;

  & > * {
    margin-bottom: 1.5em;
    width: 100%;
  }

  & a > * {
    width: 100%;
  }

  .btn-ghost {
    font-size: 0.85em;
    height: 18em;
  }

  & .btn-ghost span {
    font-size: 2em;
  }
`
