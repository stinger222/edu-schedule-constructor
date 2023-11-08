export enum ThemeEnum  {
	light = "light",
	dark = "dark"
}

export type HexColor = `#${string}`

export interface ITheme {
	type: ThemeEnum,
	
	colors: {
		primary: HexColor
	},
	button: {
		active: HexColor,
	},
	text: {
		primary: HexColor,
		secondary: HexColor
	},
  link: {
    blue: HexColor,
    negative: HexColor
  },
	background: {
		primary: HexColor,
	},

  dropdown: {
    background: HexColor,
    border: string,
    divider: HexColor,
    buttons: HexColor,
    buttonBoxShadow: string,
    boxShadow: string
  },

  classCard: {
    background: HexColor,
    boxShadow: string
  },
  classScheduleCard: {
    background: HexColor,
    boxShadow: string
  },
  assembledScheduleCard: {
    background: HexColor,
    boxShadow: string
  },
  dayCard: {
    background: HexColor,
    boxShadow: string
  },
  signInCard: {
    background: HexColor,
    boxShadow: string
  },

  input: {
    background: HexColor,
    border: HexColor
  },
  select: {
    border: HexColor,
    background: HexColor,
    text: {
      label: HexColor,
      input: HexColor,
      dropdown: HexColor
    }
    dropdown: {
      border: HexColor,
      background: HexColor,
      activeItem: HexColor,
      item: HexColor
    }
  },
  switch: {
    background: HexColor,
    active: HexColor
  },
  scrollbarThumb: {
    background: HexColor
  },

  message : {
    error: {
      header: HexColor,
      text: HexColor,
      background: string,
      border: string
    },
    warning: {
      header: HexColor,
      text: HexColor,
      background: string,
      border: string
    },
    emptyDay: {
      header: HexColor,
      text: HexColor,
      background: string,
      border: string
    }
  }
}