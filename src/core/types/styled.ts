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

  lessonCard: {
    background: HexColor,
    boxShadow: string
  },
  ringsScheduleCard: {
    background: HexColor,
    boxShadow: string
  },
  composedScheduleCard: {
    background: HexColor,
    boxShadow: string
  },
  dayCard: {
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
      scrollbar: HexColor,
      activeItem: HexColor,
      item: HexColor
    }
  },
  switch: {
    background: HexColor,
    active: HexColor
  }
}