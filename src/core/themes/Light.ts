import { ITheme, ThemeEnum } from "../types/styled"

export const LightTheme: ITheme = {
  type: ThemeEnum.light,

  colors: {
    primary: "#0075FF"
  },
  button: {
    active: "#000"
  },
  text: {
    primary: "#000",
    secondary: "#9E9E9E"
  },
  background: {
    primary: "#FFF"
  },
  dropdown: {
    background: "#FFF",
    border: "#515151",
    divider: "#C6C6C6",
    buttons: "#25272C",
    buttonBoxShadow: "0.05em 0.1em 0.25em 0 #00000095",
    boxShadow: "0.2em 0.3em 0.6em 0 rgb(0 0 0 / 40%)"
  },
  classCard: {
    background: "#FFF",
    boxShadow: "0.1em 0.2em 0.4em 0 #00000080"
  },
  classScheduleCard: {
    background: "#FFF",
    boxShadow: "0.1em 0.2em 0.45em 0 #00000080"
  },
  assembledScheduleCard: {
    background: "#FFF",
    boxShadow: "-0.4em 0 0.5em -0.5em #00000030, 0.2em 0.3em 0.4em 0 #00000040, 0 -0.4em 0.5em -0.5em #00000030"
  },
  dayCard: {
    background: "#F7F7F9",
    boxShadow: "0.1em 0.15em 0.3em 0 #00000050"
  },
  
  input: {
    background: "#FFF",
    border: "#707070"
  },
  select: {
    border: "#707070",
    background: "#FFF",
    text: {
      label: "#000",
      input: "#242424",
      dropdown: "#000"
    },
    dropdown: {
      border: "#FFFFF",
      background: "#FFF",
      scrollbar: "#", // TODO: NOT USED!!
      activeItem: "#0075FFCC",
      item: "#F2F2F2"
    }
  },
  switch: {
    background: "#FFF",
    active: "#0075FF"
  }
}