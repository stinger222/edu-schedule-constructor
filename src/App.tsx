import { HashRouter, Route, Routes } from "react-router-dom";
import GlobalStyles  from "./components/GlobalStyles";
import ComposedSchedules from "./components/pages/ComposedSchedules/ComposedSchedules";
import Main from "./components/pages/Main/Main";
import RingSchedules from "./components/pages/RingSchedules/RingSchedules";
import Lessons from "./components/pages/Lessons/Lessons";

function App() {
  return <>
		<GlobalStyles />
		<HashRouter>
			<Routes>
				<Route path="/" element={<Main />}/>
				<Route path="/composed" element={<ComposedSchedules />}/>
				<Route path="/rings" element={<RingSchedules />}/>
				<Route path="/lessons" element={<Lessons />}/>
			</Routes>
		</HashRouter>
	</>
}

export default App;
