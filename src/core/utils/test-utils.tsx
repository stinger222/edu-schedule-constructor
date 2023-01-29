import { ReactElement } from "react"
import { DarkTheme } from "../themes/Dark"
import { ThemeProvider } from "styled-components"
import { render, RenderOptions } from "@testing-library/react"
import GlobalStyles from "../themes/GlobalStyles"

const AllTheProviders: React.FC<{children: ReactElement}> = ({children}) => {
	return (
		<ThemeProvider theme={DarkTheme}>
			{children}
		</ThemeProvider>
	)
}

const myRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
	return render(ui, { wrapper: AllTheProviders, ...options,})
}

export * from '@testing-library/react'
export {myRender as render}