import { ITheme, ThemeEnum } from "../types/styled"

export const DarkTheme: ITheme = {
  type: ThemeEnum.dark,

  colors: {
    primary: "#0075FF"
  },
  button: {
    active: "#000000"
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#9E9E9E"
  },
  background: {
    primary: "#37393F"
  },
  dropdown: {
    background: "#37393F",
    border: "#787878",
    divider: "#BDBDBD",
    buttons: "#25272C",
    buttonBoxShadow: "0.1em 0.2em 0.3em 0 #00000085",
    boxShadow: "0.3em 0.3em 0.6em 0 rgb(0 0 0 / 60%)"
  },
  lessonCard: {
    background: "#2A2C32",
    boxShadow: "0.3em 0.4em 0.4em 0 #00000080"
  },
  ringsScheduleCard: {
    background: "#2A2C32",
    boxShadow: "0.3em 0.4em 0.4em 0 #00000080"
  },
  composedScheduleCard: {
    background: "#2A2C32",
    boxShadow: "0.4em 0.4em 0.4em 0 #00000080"
  },
  dayCard: {
    background: "#37393F",
    boxShadow: "0.1em 0.2em 0.2em 0 #00000080"
  },
  
  input: {
    background: "#34363C",
    border: "#71717C"
  },
  select: {
    border: "#71717C",
    background: "#34363C",
    text: {
      label: "#FFFFFF",
      input: "#B8BABF",
      dropdown: "#FFFFFF"
    },
    dropdown: {
      border: "#FFFFF",
      background: "#37393F",
      scrollbar: "#", // TODO: NOT USED!!
      activeItem: "#0075FFCC",
      item: "#2A2C32"
    }
  },
  switch: {
    background: "#50535a",
    active: "#0068e2"
  }
}