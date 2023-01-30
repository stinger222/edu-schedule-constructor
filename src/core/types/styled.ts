export enum ThemeEnum  {
	light = "light",
	dark = "dark"
}

export interface ITheme {
	type: ThemeEnum,
	
	colors: {
		bg: string,
		cardBg: string,
		dayCardBg: string,
		buttonBg: string,

		primary: string,
		secondary: string,

		textPrimary: string,
		textSecondary: string
	},
	boxShadows: {
		primaryShadow: string,
		secondaryShadow: string
	}
}