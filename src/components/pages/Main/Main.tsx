import BreakCard from "../../BreakCard/BreakCard"
import Container from "../../Container/Container"
import Header from "../../Header/Header"
import LessonCard from "../../LessonCard/LessonCard"
import StyledMain from "./Main.styled"

const Main = () => {
	return (
		<StyledMain>
			<Header/>
			<Container>

			<LessonCard
				cabinet="302т"
				startTime="10:10"
				endTime="11:10"
				lessonId={1}
				lessonName="Какая-то хуйня"
				teacherName="Какой-то хуй"
				/>

			<BreakCard
				breakLength={10}
				startTime="11:10"
				endTime="11:20"
			/>
			<LessonCard
				cabinet="302т"
				startTime="10:10"
				endTime="11:10"
				lessonId={1}
				lessonName="Какая-то хуйня"
				teacherName="Какой-то хуй"
				/>

			<BreakCard
				breakLength={10}
				startTime="11:10"
				endTime="11:20"
			/>
			<LessonCard
				cabinet="302т"
				startTime="10:10"
				endTime="11:10"
				lessonId={1}
				lessonName="Какая-то хуйня"
				teacherName="Какой-то хуй"
				/>

			<BreakCard
				breakLength={10}
				startTime="11:10"
				endTime="11:20"
			/>

			<LessonCard
				cabinet="302т"
				startTime="10:10"
				endTime="11:10"
				lessonId={1}
				lessonName="Какая-то хуйня"
				teacherName="Какой-то хуй"
				/>

			</Container>
		</StyledMain>
	)
}

export default Main
