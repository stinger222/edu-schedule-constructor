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
  link: {
    blue: "#4169E1",
    negative: "#3F3F3F"
  },
  background: {
    primary: "#FFF"
  },
  dropdown: {
    background: "#FFF",
    border: "#515151",
    divider: "#D2D2D2", // "#C6C6C6",
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
  signInCard: {
    background: "#FF0000",
    boxShadow: "0.1em 0.2em 0.4em 0 #00000080"
  },

  input: {
    background: "#FFF",
    border: "#555555"
  },
  select: {
    border: "#555555",
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
  },

  message: {
    error: {
      header: "#F22F2F",
      text: "#FF0000",
      background: "transparent",
      border: "#f22f2f"
    },
    warning: {
      header: "#ffc300",
      text: "#ffc800",
      background: "transparent",
      border: "#ffb904"
    },
    emptyDay: {
      header: "#11A3F5",
      text: "#11A3F5",
      background: "transparent",
      border: "#00B2FF"
    }
  }

  // =============== Filled style ================
  
  // message: {
  //   error: {
  //     header: "#F22F2F",
  //     text: "#FF0000",
  //     background: "#f22f2f13",
  //     border: "transparent"
  //   },
  //   warning: {
  //     header: "#f5cd11",
  //     text: "#ffc800",
  //     background: "#ffb90424",
  //     border: "transparent"
  //   },
  //   emptyDay: {
  //     header: "#11A3F5",
  //     text: "#11A3F5",
  //     background: "#00B2FF24",
  //     border: "transparent"
  //   }
  // }
}