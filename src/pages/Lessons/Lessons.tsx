import LessonCards from "../../components/wrappers/LessonCards/LessonCards"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledLessonsPage } from "./Lessons.styled"
import { Link } from "react-router-dom"
import GhostButton from "../../components/ui/GhostButton/GhostButton"

const Lessons = () => {
  return (
		<StyledLessonsPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> Добавленные предметы </h1>
					<Header.BurgerButton/>
				</Header>
				
				<LessonCards />

				<Link to="/add/lesson">
					<GhostButton> Добавить предмет </GhostButton>
				</Link>
				
			</Container>
		</StyledLessonsPage>
  )
}

export default Lessons
