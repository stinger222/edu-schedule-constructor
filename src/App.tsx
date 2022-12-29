import { observer } from "mobx-react";
import { useContext } from "react";
import { StoreContext } from ".";

import Container from "./components/ordinary/Container/Container";
import LessonCard from "./components/ordinary/LessonCard/LessonCard";
import ProgressBar from "./components/ordinary/ProgressBar/ProgressBar";
import Dropdown from "./components/smart/Dropdown/Dropdown";
import Header from "./components/smart/Header/Header";


function App() {
	const { uiStore } = useContext(StoreContext)

  return (
    <Container>
			<Header>
				<Header.NavBar/>
				<Header.BurgerButton/>
			</Header>
			
			<div className="schedule_row">
				<ProgressBar
					startTime="8:30"
					endTime="9:50"
				/>
				<LessonCard
					teacher=" "
					cabinet=" "
					title=" "
				/>
			</div>
			<div className="schedule_row">
				<ProgressBar
					startTime="8:30"
					endTime="9:50"
				/>
				<LessonCard
					teacher="Name Name Name Name Name Name e Name"
					cabinet="101г"
					title="Some really really really really reeeeeeally long name"
				/>
			</div>
		
		<button onClick={() => {
			uiStore.toggleDropdown()
		}}>DICK</button>

		{uiStore.isDropdownOpen && <Dropdown/>}
    </Container>
  )
}

export default observer(App);
