import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { StoreContext } from "../../.."
import BreakCard from "../../BreakCard/BreakCard"
import Container from "../../Container/Container"
import Header from "../../Header/Header"
import LessonCard from "../../LessonCard/LessonCard"
import StyledMain from "./Main.styled"

const Main = observer(() => {
	const {lessonsStore} = useContext(StoreContext)
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
			<pre>{JSON.stringify(lessonsStore.lessons, null, 2)}</pre>
			<button onClick={() => {
				lessonsStore.dick()
			}}>Click Me</button>
			</Container>
		</StyledMain>
	)
})

export default Main
