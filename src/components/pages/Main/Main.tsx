import { observer } from "mobx-react-lite"
import React, { useContext } from "react"
import { StoreContext } from "../../.."
import BreakCard from "../../BreakCard/BreakCard"
import Container from "../../Container/Container"
import Header from "../../Header/Header"
import LessonCard from "../../LessonCard/LessonCard"
import StyledMain from "./Main.styled"

const Main = () => {
	const { comsposedSchedulesStore, uiStore, lessonsStore, ringSchedulesStore } = useContext(StoreContext)

	const lessons = lessonsStore.lessons
	const ringSchedules = ringSchedulesStore.schedules

	const selectedDayId = uiStore.selectedDayId
	const selectedDay = comsposedSchedulesStore.schedules[0].week[selectedDayId-1]
	const selectedDayRings = ringSchedules.find(i => i.id === selectedDay.ring_schedule_id).lessons
	
	// i.e data for certain LessonCard and BreackCard
	const getCardsData = (lessonId, itemId) => {
		const lesson = lessons.find(i => i.id === lessonId)
		const lessonRings = selectedDayRings[itemId]
		let breakStart = selectedDayRings[itemId]?.end
		let breakEnd = selectedDayRings[itemId + 1]?.start

		if (itemId + 1 >= selectedDay.lesson_ids.length ) {
			breakEnd = undefined
		}

		return [lesson, lessonRings, breakStart, breakEnd]
	}

	return (
		<StyledMain>
			<Header/>
			<Container>
				
			{selectedDay.lesson_ids.map((lessonId, itemId) => {
				const [ lesson, lessonRings, breakStart, breakEnd ] = getCardsData(lessonId, itemId)

				return <React.Fragment key={itemId}>
					<LessonCard
						cabinet={lesson["cabinet"]}
						startTime={lessonRings["start"]}
						endTime={lessonRings["end"]}
						lessonId={itemId + 1}
						lessonName={lesson["lesson_name"]}
						teacherName={lesson["teacher"]}
					/>
					
					<BreakCard
						startTime={breakStart as string | undefined}
						endTime={breakEnd as string | undefined}
					/>
				</React.Fragment>
			})}

			</Container>
		</StyledMain>
	)
}

export default observer(Main)
