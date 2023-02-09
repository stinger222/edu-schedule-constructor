import { StoreContext } from "."
import { useContext, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom";

import Main from "./pages/Main/Main";
import Lessons from "./pages/Lessons/Lessons";
import Rings from "./pages/RingsSchedules/Rings";
import Composed from "./pages/ComposedSchedules/Composed"
import TimeRange from "./components/ordinary/TimeRange/TimeRange"
import Container from "./components/containers/Container/Container"

const App = () => {
	const location = useLocation()
	const { uiStore } = useContext(StoreContext)

	useEffect(() => {
		uiStore.toggleDropdown(false)
	}, [location])

  return (
		<Routes>
			<Route path="/" element={<Main />}/>
			<Route path="/composed" element={<Composed />}/>
			<Route path="/lessons" element={<Lessons />}/>
			<Route path="/rings" element={<Rings />}/>

			<Route path="/add">
				<Route path="rings" element={<>
					<Container>
						<TimeRange index={1}/>
						<TimeRange index={2}/>
						<TimeRange index={3}/>
					</Container>
				</>}/>
			</Route>
		</Routes>
  )
}

export default App;
