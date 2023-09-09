import React, { ReactElement } from "react"
import { HashRouter } from "react-router-dom"
import { render, RenderOptions } from "@testing-library/react"

import RootStore from "../store/RootStore"

import { DarkTheme } from "../themes/Dark"
import { ThemeProvider } from "styled-components"
import { NewDarkTheme } from "../themes/NewDark"

const AllTheProviders: React.FC<{children: ReactElement}> = ({children}) => {

	const rootStore = new RootStore()
	const StoreContext = React.createContext<typeof rootStore>(rootStore)

	return (
		<ThemeProvider theme={NewDarkTheme}>
			<StoreContext.Provider value={rootStore}>
				<HashRouter>
					{children}
				</HashRouter>
			</StoreContext.Provider>
		</ThemeProvider>
	)
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) => {
	return render(ui, { wrapper: AllTheProviders, ...options})
}

export * from "@testing-library/react"
export {customRender as render}