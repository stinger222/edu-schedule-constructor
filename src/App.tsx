import { StoreContext } from "."
import { useContext, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom";

import Composed from "./pages/Composed/Composed"
import Lessons from "./pages/Lessons/Lessons";
import Main from "./pages/Main/Main";
import Rings from "./pages/Rings/Rings";

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
		</Routes>
  )
}

export default App;
