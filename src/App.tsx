import { StoreContext } from "."
import { useContext, useEffect, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom";

import Main from "./pages/Main/Main";
import Lessons from "./pages/Lessons/Lessons";
import Rings from "./pages/RingsSchedules/Rings";
import Composed from "./pages/ComposedSchedules/Composed"
import AddRingsSchedule from "./pages/AddRingsSchedule/AddRingsSchedule"
import AddLesson from "./pages/AddLesson/AddLesson"
import Select from "./components/ui/Select/Select"
import Container from "./components/containers/Container/Container"
import { IOption } from "./core/types/types"
import { nanoid } from "nanoid"

const App = () => {
	const location = useLocation()
	const { uiStore } = useContext(StoreContext)

	useEffect(() => {
		uiStore.toggleDropdown(false)
	}, [location])

	const options: IOption[] = [
		{label: 'Название пары 1', id: 'dfsg34'},
		{label: 'Название пары 2',  id: 'f349hf'},
		{label: 'Название пары 3',  id: '09i43f'},
		{label: 'Название пары 4',  id: '0tu9ru'},
		{label: 'Название пары 5',  id: 'y6789d'},
	]


	const [selectedOption, setSelectedOption] = useState<IOption | null>(null)

	const handleSelect = (newOption: IOption) => {
		setSelectedOption(newOption)
	}
	
  return (
		
		<Container>
			<Select options={options} selectedOption={selectedOption} onChange={handleSelect}/>
		</Container>
		// <Routes>
		// 	<Route path="/" element={<Main />}/>
		// 	<Route path="/composed" element={<Composed />}/>
		// 	<Route path="/lessons" element={<Lessons />}/>
		// 	<Route path="/rings" element={<Rings />}/>

		// 	<Route path="/add">
		// 		<Route path="rings" element={<AddRingsSchedule />}/>
		// 		<Route path="lesson" element={<AddLesson />}/>
		// 	</Route>
		// </Routes>
  )
}

export default App;
