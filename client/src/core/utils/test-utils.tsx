import React, { ReactElement } from "react"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { render, RenderOptions } from "@testing-library/react"
import { DarkTheme } from "../style/themes/Dark"
import MockRootStore from "../store/__mocks__/MockRootStore"
import "../configs/i18next"

const AllTheProviders = ({ children }: { children: ReactElement }) => {
	const rootStore = new MockRootStore()
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

export * from "@testing-library/react"
export { customRender as render }
