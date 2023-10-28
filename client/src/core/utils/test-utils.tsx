import React, { ReactElement } from "react"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { render, RenderOptions } from "@testing-library/react"
import { DarkTheme } from "../themes/Dark"
import RootStore from "../store/RootStore"

const AllTheProviders = ({ children }: { children: ReactElement }) => {
	const rootStore = new RootStore()
	const TestStoreContext = React.createContext<typeof rootStore>(rootStore)

	return (
		<ThemeProvider theme={DarkTheme}>
			<TestStoreContext.Provider value={rootStore}>
				<HashRouter>
					{children}
				</HashRouter>
			</TestStoreContext.Provider>
		</ThemeProvider>
	)
}

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) => {
	return render(ui, { wrapper: AllTheProviders, ...options})
}

export const wait = (ms: number = 50) => new Promise(res => setTimeout(res, ms))

export * from "@testing-library/react"
export { customRender as render }
