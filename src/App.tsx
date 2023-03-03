import { StoreContext } from "."
import { useContext, useEffect, useRef, useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom";

import Main from "./pages/Main/Main";
import Lessons from "./pages/Lessons/Lessons";
import Rings from "./pages/RingsSchedules/Rings";
import Composed from "./pages/ComposedSchedules/Composed"
import AddRingsSchedule from "./pages/AddRingsSchedule/AddRingsSchedule"
import AddLesson from "./pages/AddLesson/AddLesson"
import Container from "./components/containers/Container/Container"
import { IOption } from "./core/types/types"
import { Controller, FormProvider, useFieldArray, useForm } from "react-hook-form"
import styled from '@emotion/styled';
import Select from "./components/ui/Select/Select"
import SelectWrapper from "./components/wrappers/SelectWrapper/SelectWrapper"

const App = () => {
	const location = useLocation()
	const { uiStore } = useContext(StoreContext)

	useEffect(() => {
		uiStore.toggleDropdown(false)
	}, [location])

	const methods = useForm({defaultValues: {
		frameworks: [
			{
				value: ''
			}
		]
	}})
	
	const { append, fields } = useFieldArray({control: methods.control, name: 'frameworks' })
  return (
		
		<Container>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(console.log)}>
					{
						fields.map((i, index) => (
							<SelectWrapper
								registerName="frameworks"
								index={index}
								key={index}
								data={[
									{value: 'test', label: "test"},
									{value: 'test2', label: "test2"}
								]}
							/>
						))
					}
					
					<br/>
					
					<button onClick={() => append({value: ''})}>Add</button>
					<button type="submit">Submit</button>
				</form>
			</FormProvider>

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
