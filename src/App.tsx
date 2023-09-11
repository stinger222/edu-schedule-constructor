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
import AddRingsSchedulePage from "./pages/AddRingsSchedule/AddRingsSchedulePage"
import AddLessonPage from "./pages/AddLesson/AddLessonPage"
import RingsPage from "./pages/RingsSchedules/RingsPage"
import LessonsPage from "./pages/Lessons/LessonsPage"
import MainPage from "./pages/Main/MainPage"


const App = () => {
  const { uiStore } = useContext(StoreContext)
  const theme = uiStore.userSettings.theme === ThemeEnum.dark ? DarkTheme : LightTheme

	return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/composed" element={<ComposedSchedulesPage />} />
        <Route path="/lessons" element={<LessonsPage />} />
        <Route path="/rings" element={<RingsPage />} />

        <Route path="/add">
          <Route path="composed" element={<AddComposedSchedulePage />} />
          <Route path="lesson" element={<AddLessonPage />} />
          <Route path="rings" element={<AddRingsSchedulePage />} />
        </Route>
      </Routes>
      <GlobalStyles />
    </ThemeProvider>
	)
}

export default observer(App)
