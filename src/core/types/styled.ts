export enum ThemeEnum  {
	light = "light",
	dark = "dark"
}

type colorString = `#${string}`

export interface ITheme {
	type: ThemeEnum,
	
	colors: {
		primary: colorString,
		secondary: colorString
	},
	buttons: {
		primary: colorString,
		secondary: colorString,
	},
	text: {
		primary: colorString,
		secondary: colorString
	},
	backgrounds: {
		primary: colorString,
		secondary: colorString,
		tertiary: colorString
	},
	borders: {
		primary: colorString,
		secondary: colorString,
		dashed: colorString
	},
	boxShadows: {
		primary: string,
		secondary: string
	}
}

export type HexColor = `#${string}`

export interface INewTheme {
	type: ThemeEnum,
	
	colors: {
		primary: HexColor // RoyalBlue вот этот вот
	},
	button: {
		active: HexColor, // Black
	},
	text: {
		primary: HexColor, // White / Black
		secondary: HexColor // Gray
	},
	background: {
		primary: HexColor, // White / Gray
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
  }
}