import Container from "../../Container/Container"
import HeaderSecondary from "../../Header/HeaderSecondary"
import { StyledLessons } from "./Lessons.styled"

const LessonsList = () => {
	return (
		<StyledLessons>
			<HeaderSecondary />
			<Container>
				<h1>Lessons list will be here</h1>
			</Container>
		</StyledLessons>
	)
}

export default LessonsList
