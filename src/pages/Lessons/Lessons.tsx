import LessonCards from "../../components/containers/LessonCards/LessonCards"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledLessonsPage } from "./Lessons.styled"

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
			</Container>
		</StyledLessonsPage>
  )
}

export default Lessons
