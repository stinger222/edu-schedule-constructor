import { ThemeEnum, ITheme } from './../types/styled'

export const DarkTheme: ITheme = {
	type: ThemeEnum.dark,
	
	colors: {
    bg: '#37393F',
    cardBg: '#2A2C32',
		dayCardBg: '#37393F',
		buttonBg: '#25272C',

    primary: '#0075FF',
		secondary: '#FFFFFF',

    textPrimary: '#FFFFFF',
    textSecondary: '#808080',
		textPlaceholder: '#707070'
	},
	boxShadows: {
		primaryShadow: '0.05em 0.2em 0.2em 0.08em #00000080',
		secondaryShadow: '0.05em 0.15em 0.1em 0em #00000080',
	}
}