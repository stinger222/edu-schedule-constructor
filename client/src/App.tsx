import { useContext } from "react"
import { observer } from "mobx-react"
import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { StoreContext } from "."
import { ThemeEnum } from "./core/types/styled"
import { LightTheme } from "./core/style/themes/Light"
import { DarkTheme } from "./core/style/themes/Dark"
import GlobalStyles from "./core/style/shared/GlobalStyles"

import AddAssembledSchedulePage from "./pages/AddAssembledSchedulePage/AddAssembledSchedulePage"
import AssembledSchedulesPage from "./pages/AssembledSchedules/AssembledSchedulesPage"
import AddClassSchedulePage from "./pages/AddClassSchedulePage/AddClassSchedulePage"
import ClassSchedulesPage from "./pages/ClassSchedulesPage/ClassSchedulesPage"
import AddClassPage from "./pages/AddClassPage/AddClassPage"
import ClassesPage from "./pages/ClassesPage/ClassesPage"
import MainPage from "./pages/MainPage/MainPage"
import DebugPage from "./pages/DebugPage/DebugPage"
import LogInPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { Toaster } from "sonner"

const App = () => {
  const { uiStore } = useContext(StoreContext)
  const theme = uiStore.userSettings.theme === ThemeEnum.dark ? DarkTheme : LightTheme

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/assembled" element={<AssembledSchedulesPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/class-schedules" element={<ClassSchedulesPage />} />
        
        {import.meta.env.DEV && <Route path="/debug" element={<DebugPage />} />}

        <Route path="/add">
          <Route path="assembled" element={<AddAssembledSchedulePage />} />
          <Route path="class" element={<AddClassPage />} />
          <Route path="class-schedules" element={<AddClassSchedulePage />} />
        </Route>

        <Route path="/auth">
          <Route path="login" element={<LogInPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>

      <Toaster richColors position="top-right" />
      <GlobalStyles />

    </ThemeProvider>
	)
}

export default observer(App)
