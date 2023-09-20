import { useContext } from "react"
import { observer } from "mobx-react"
import { Route, Routes } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { StoreContext } from "."
import { ThemeEnum } from "./core/types/styled"
import { LightTheme } from "./core/themes/Light"
import { DarkTheme } from "./core/themes/Dark"
import GlobalStyles from "./core/themes/GlobalStyles"

import AddComposedSchedulePage from "./pages/AddComposedSchedule/AddComposedSchedulePage"
import ComposedSchedulesPage from "./pages/ComposedSchedules/ComposedSchedulesPage"
import AddClassSchedulePage from "./pages/AddClassSchedulePage/AddClassSchedulePage"
import AddClassPage from "./pages/AddClassPage/AddClassPage"
import ClassSchedulesPage from "./pages/ClassSchedulesPage/ClassSchedulesPage"
import ClassesPage from "./pages/ClassesPage/ClassesPage"
import MainPage from "./pages/Main/MainPage"


const App = () => {
  const { uiStore } = useContext(StoreContext)
  const theme = uiStore.userSettings.theme === ThemeEnum.dark ? DarkTheme : LightTheme

	return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/composed" element={<ComposedSchedulesPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/class-schedules" element={<ClassSchedulesPage />} />

        <Route path="/add">
          <Route path="composed" element={<AddComposedSchedulePage />} />
          <Route path="class" element={<AddClassPage />} />
          <Route path="class-schedules" element={<AddClassSchedulePage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
	)
}

export default observer(App)
