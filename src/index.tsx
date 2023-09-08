import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import { Provider as StoreProvider } from "mobx-react"

import "./core/configs/i18next"
import RootStore from "./core/store/RootStore"
import App from "./App"

const rootStore = new RootStore()
export const StoreContext = React.createContext<typeof rootStore>(rootStore)

const rootElement = document.getElementById("root")

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StoreProvider value={rootStore}>
      <HashRouter>
        <App />
      </HashRouter>
    </StoreProvider>
  )
}
