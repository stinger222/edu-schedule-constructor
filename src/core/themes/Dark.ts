import { ThemeEnum, ITheme } from './../types/styled'

export const DarkTheme: ITheme = {
	type: ThemeEnum.dark,
	
	colors: {
		primary: "#0075FF",
		secondary: "#FFFFFF",
	},
	buttons: {
		primary: "#000000",
		secondary: "#25272C",
	},
	text: {
		primary: "#FFFFFF",
		secondary: "#808080"
	},
	backgrounds: {
		primary: "#37393F",
		secondary: "#2A2C32",
		tertiary: "#37393F"
	},
	borders: {
		primary: "#FFFFFF",
		secondary: "#969696",
		dashed: "#9B9B9B"
	},
	boxShadows: {
		primary: '0.05em 0.2em 0.2em 0.08em #00000080',
		secondary: '0.05em 0.15em 0.1em 0em #00000080',
	}
}