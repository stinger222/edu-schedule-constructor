import LessonCards from "../../components/containers/LessonCards/LessonCards"
import Container from "../../components/containers/Container/Container"
import GhostButton from "../../components/ui/GhostButton/GhostButton"
import Header from "../../components/smart/Header/Header"
import { StyledLessonsPage } from "./Lessons.styled"

const Lessons = () => {
  return (
		<StyledLessonsPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> Добавленные предметы </h1>
					<Header.BurgerButton style={{margin: 0}}/>
				</Header>
				
				<LessonCards />

				<GhostButton>Добавить предмет</GhostButton>
			</Container>
		</StyledLessonsPage>
  )
}

export default Lessons
