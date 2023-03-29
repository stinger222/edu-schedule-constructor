import Container from "../../components/containers/Container/Container"
import LessonCard from "../../components/ordinary/LessonCard/LessonCard"
import Timeline from "../../components/ordinary/Timeline/Timeline"
import Header from "../../components/smart/Header/Header"
import { StyledMainPage } from "./Main.styled"

const Main = () => {
  return (
		<StyledMainPage>
			<Container>
				<Header>
					<Header.NavBar/>
					<Header.BurgerButton/>
				</Header>
				
				<div className="schedule-item">
					<Timeline
						startTime="10:30"
						endTime="9:50"
					/>
					<LessonCard
						teacher=" "
						cabinet=" "
						title=" "
					/>
				</div>
				<div className="schedule-item">
					<Timeline
						startTime="8:30"
						endTime="9:50"
						active
					/>
					<LessonCard
						teacher="Some name"
						cabinet=""
						title="Some title"
					/>
				</div>
				<div className="schedule-item">
					<Timeline
						startTime="8:30"
						endTime="9:50"
					/>
					<LessonCard
						teacher=" "
						cabinet="101г"
						title="Some really really really really reeeeeeally long title"
					/>
				</div>
			</Container>
		</StyledMainPage>
  )
}

export default Main
