import Container from "../components/containers/Container/Container"
import LessonCard from "../components/ordinary/LessonCard/LessonCard"
import ProgressBar from "../components/ordinary/ProgressBar/ProgressBar"
import Header from "../components/smart/Header/Header"

const Main = () => {
  return (
    <Container>
			<Header>
				<Header.NavBar/>
				<Header.BurgerButton/>
			</Header>
			
			<div className="schedule_row">
				<ProgressBar
					startTime="10:30"
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
	  </Container>
  )
}

export default Main
