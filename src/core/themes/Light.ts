import { ITheme, ThemeEnum } from './../types/styled'

export const LightTheme: ITheme = {
	type: ThemeEnum.light,

	colors: {
    bg: '#FFFFFF',
    cardBg: '#FFFFFF',
		dayCardBg: '#F3F3F3',
		buttonBg: '#000000',

    primary: '#0075FF',
		secondary: '#000000',

    textPrimary: '#000000',
    textSecondary: '#000000'
	},
	boxShadows: {
		primaryShadow: '0.1em 0.2em 0.35em 0 #00000050, 0 -0.1em 0.5em -0.3em #00000050',
		secondaryShadow: '0.05em 0.1em 0.1em 0 #00000090',
	}
}