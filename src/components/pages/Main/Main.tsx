import Header from "../../Header/Header"
import LessonCard from "../../LessonCard/LessonCard"
import StyledMain from "./Main.styled"

const Main = () => {
	return (
		<StyledMain>
			<Header/>

			<LessonCard
				cabinet="302т"
				startTime="10:10"
				endTime="11:10"
				lessonId={1}
				lessonName="Какая-то хуйня"
				teacherName="Какой-то хуй"
			/>

		</StyledMain>
	)
}

export default Main
