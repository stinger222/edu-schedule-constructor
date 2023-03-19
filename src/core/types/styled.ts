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
		secondary: colorString
	},
	boxShadows: {
		primary: string,
		secondary: string
	}
}