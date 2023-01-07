import { HashRouter, Route, Routes } from "react-router-dom";
import ComposedSchedule from "./components/smart/ComposedSchedule/ComposedSchedule"
import Composed from "./pages/Composed"
import Lessons from "./pages/Lessons";
import Main from "./pages/Main";
import Rings from "./pages/Rings";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/composed" element={<Composed />}/>
        <Route path="/lessons" element={<Lessons />}/>
        <Route path="/rings" element={<Rings />}/>
      </Routes>
    </HashRouter>
  )
}



// let x = () => {
// 	let composedSchedules = [...]
// 	return	<div>
// 		<ComposedSchedule>
// 			{composedSchedules.forEach(schedule => (
// 				<ComposedSchedule.DayCard {...schedule} />
// 			))}
// 		</ComposedSchedule>
// 	</div>
// }


export default App;
