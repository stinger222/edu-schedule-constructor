import { StoreContext } from "."
import { useContext, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom";


import Main from "./pages/Main/Main";
import Lessons from "./pages/Lessons/Lessons";
import Rings from "./pages/RingsSchedules/Rings";
import Composed from "./pages/ComposedSchedules/Composed"

import AddLesson from "./pages/AddLesson/AddLesson"
import AddRingsSchedule from "./pages/AddRingsSchedule/AddRingsSchedule"
import AddComposedSchedule from "./pages/AddComposedSchedule/AddComposedSchedule"

const App = () => {
	const location = useLocation()
	const { uiStore } = useContext(StoreContext)

	useEffect(() => {
		uiStore.toggleDropdown(false)
	}, [location])

	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/composed" element={<Composed />} />
			<Route path="/lessons" element={<Lessons />} />
			<Route path="/rings" element={<Rings />} />

			<Route path="/add">
				<Route path="rings" element={<AddRingsSchedule />} />
				<Route path="lesson" element={<AddLesson />} />
				<Route path="composed" element={<AddComposedSchedule />} />
			</Route>
		</Routes>
	)
}

export default App