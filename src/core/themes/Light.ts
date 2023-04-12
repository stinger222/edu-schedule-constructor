import { ITheme, ThemeEnum } from "./../types/styled"

export const LightTheme: ITheme = {
	type: ThemeEnum.light,

	colors: {
		primary: "#0075FF",
		secondary: "#000000"
	},
	buttons: {
		primary: "#000000",
		secondary: "#000000",
	},
	text: {
		primary: "#000000",
		secondary: "#A3A3A3"
	},
	backgrounds: {
		primary: "#FFFFFF",
		secondary: "#FFFFFF",
		tertiary: "#F3F3F3"
	},
	borders: {
		primary: "#000000",
		secondary: "#000000",
		dashed: "#838383"
	},
	boxShadows: {
		primary: "0.1em 0.2em 0.35em 0 #00000050, 0 -0.1em 0.5em -0.3em #00000050",
		secondary: "0.05em 0.1em 0.1em 0 #00000090",
	}
}