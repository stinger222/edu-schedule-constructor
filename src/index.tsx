import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Provider as StoreProvider } from "mobx-react"

import RootStore from "./core/store/RootStore"
import GlobalStyles from "./core/themes/GlobalStyles"
import { LightTheme } from "./core/themes/Light"
import { DarkTheme } from "./core/themes/Dark"
import "./core/configs/i18next"

import App from "./App"


const rootStore = new RootStore()
export const StoreContext = React.createContext<typeof rootStore>(rootStore)

const rootElement = document.getElementById("root")

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StoreProvider value={rootStore}>
      <ThemeProvider theme={LightTheme}>
        {/* <ThemeProvider theme={DarkTheme}> */}
        <HashRouter>
          <App />
        </HashRouter>
        <GlobalStyles />
      </ThemeProvider>
    </StoreProvider>
  )
}
