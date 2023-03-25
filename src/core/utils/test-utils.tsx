import React, { ReactElement } from "react"
import { DarkTheme } from "../themes/Dark"
import { ThemeProvider } from "styled-components"
import { render, RenderOptions } from "@testing-library/react"
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom"
import RootStore from "../store/RootStore"

const AllTheProviders: React.FC<{children: ReactElement}> = ({children}) => {

	const rootStore = new RootStore()
	const StoreContext = React.createContext<typeof rootStore>(rootStore)

	return (
		<ThemeProvider theme={DarkTheme}>
			<StoreContext.Provider value={rootStore}>
				<HashRouter>
					{children}
				</HashRouter>
			</StoreContext.Provider>
		</ThemeProvider>
	)
}

const myRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) => {
	return render(ui, { wrapper: AllTheProviders, ...options,})
}

export * from '@testing-library/react'
export {myRender as render}