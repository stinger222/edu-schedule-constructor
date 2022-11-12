import { HashRouter, Route, Routes } from "react-router-dom";
import GlobalStyles  from "./components/GlobalStyles";
import ComposedSchedules from "./components/pages/ComposedSchedules/ComposedSchedules";
import RingSchedules from "./components/pages/RingSchedules/RingSchedules";
import Lessons from "./components/pages/Lessons/Lessons";
import Main from "./components/pages/Main/Main";
import AddLesson from "./components/pages/AddLesson/AddLesson";
import { ToastContainer } from "react-toastify";

function App() {
  return <>
		<GlobalStyles />
		<HashRouter>
			<Routes>
				<Route path="/" element={<Main />}/>
				<Route path="/composed" element={<ComposedSchedules />}/>
				<Route path="/rings" element={<RingSchedules />}/>
				<Route path="/lessons" element={<Lessons />}/>

				<Route path="/add">
          <Route path="lesson" element={<AddLesson />}/>
          <Route path="rings" element={<h1>Form to create new ring schedules will be here</h1>}/>
        </Route>
			</Routes>
		</HashRouter>
		
		<ToastContainer
			position="top-right"
			autoClose={1000}
			hideProgressBar
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
			theme="colored"
		/>
	</>
}

export default App;
