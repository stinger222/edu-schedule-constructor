import LessonCards from "../../components/wrappers/LessonCards/LessonCards"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledLessonsPage } from "./Lessons.styled"
import { useContext } from "react"
import { StoreContext } from "../.."

const Lessons = () => {

	const { lessons } = useContext(StoreContext).lessonsStore

  return (
		<StyledLessonsPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> Добавленные предметы </h1>
					<Header.BurgerButton/>
				</Header>

				<LessonCards lessons={lessons}/>

			</Container>
		</StyledLessonsPage>
  )
}

export default Lessons
