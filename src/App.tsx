import { Route, Routes } from "react-router-dom"

import MainPage from "./pages/Main/MainPage"
import LessonsPage from "./pages/Lessons/LessonsPage"
import RingsPage from "./pages/RingsSchedules/RingsPage"
import ComposedSchedulesPage from "./pages/ComposedSchedules/ComposedSchedulesPage"

import AddLessonPage from "./pages/AddLesson/AddLessonPage"
import AddRingsSchedulePage from "./pages/AddRingsSchedule/AddRingsSchedulePage"
import AddComposedSchedulePage from "./pages/AddComposedSchedule/AddComposedSchedulePage"

const App = () => {
	return (
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
	)
}

export default App