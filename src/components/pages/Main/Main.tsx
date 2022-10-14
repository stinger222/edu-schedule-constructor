import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { StoreContext } from "../../.."
import BreakCard from "../../BreakCard/BreakCard"
import Container from "../../Container/Container"
import Header from "../../Header/Header"
import LessonCard from "../../LessonCard/LessonCard"
import StyledMain from "./Main.styled"

const Main = () => {
	const { comsposedSchedulesStore, uiStore, lessonsStore, ringSchedulesStore } = useContext(StoreContext)
	const selectedDayId = uiStore.selectedDayId
	const lessons = lessonsStore.lessons
	const ringSchedules = ringSchedulesStore.schedules
	const day = comsposedSchedulesStore.schedules[0].week[selectedDayId-1]

	
	return (
		<StyledMain>
			<Header/>
			<Container>

			{day.lesson_ids.map((lessonId, itemId) => {
				const lesson = lessons.find(i => i.id === lessonId)
				const lessonRings = ringSchedules.find(i => i.id === day.ring_schedule_id).lessons[itemId]

				if (!lesson) {
					return <h1>No lessons with such id!</h1>
				} else if (!lessonRings) {
					return <h1>No ring schedules with such id, or this day conains more lessons than defined in selected ring schedule!</h1>
				}

			return <>
 				<LessonCard
					cabinet={lesson.cabinet}
					startTime={lessonRings.start}
					endTime={lessonRings.end}
					lessonId={itemId + 1}
					key={itemId}
					lessonName={lesson.lesson_name}
					teacherName={lesson.teacher}
				/>
				<br/>
			</>
			})}

			<pre>{JSON.stringify(comsposedSchedulesStore.schedules[0].week[selectedDayId-1], null, 2)}</pre>

			</Container>
		</StyledMain>
	)
}

export default observer(Main)
