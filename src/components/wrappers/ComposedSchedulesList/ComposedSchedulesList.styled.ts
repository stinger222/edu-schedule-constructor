import styled from "styled-components"

export const StyledComposedSchedulesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 0.5em;

  --action-label-icon-size: 3em;  /* 2em by default */
  --action-label-border-radius: 1.3em;  /* 1.3em by default */

  & > * {
    margin-bottom: 1.5em;
  }

  .btn-ghost {
    font-size: 0.85em;
    height: 18em;
    width: calc(37em * 1.18);
  }

  & .btn-ghost span {
    font-size: 2em;
  }
`