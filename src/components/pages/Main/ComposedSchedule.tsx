import React, { useContext } from "react"
import { StoreContext } from "../../.."
import { observer } from "mobx-react"
import BreakCard from "../../BreakCard/BreakCard"
import LessonCard from "../../LessonCard/LessonCard"


function ComposedSchedule() {
	const { composedSchedulesStore, uiStore, lessonsStore, ringSchedulesStore } = useContext(StoreContext)

	const lessons = lessonsStore.lessons
	const ringSchedules = ringSchedulesStore.schedules

	const selectedDayId = uiStore.selectedDayId
	const selectedDay = composedSchedulesStore.schedules[composedSchedulesStore.schedules.length - 1].week[selectedDayId]
	const selectedDayRings = ringSchedules.find(i => i.id === selectedDay?.ring_schedule_id)?.rings

	// User didn't compose schedule for this day
	if (!selectedDay) {
		throw new Error("Вы не составили расписание для этого дня!")
	}

	// Amount of lessons greater that amount of rings defined
	if (selectedDay?.lesson_ids?.length > selectedDayRings?.length) {
		throw new Error("Количество уроков привышет количество звонков в расписании!")
	}

	return <>
		<button onClick={() => {
			composedSchedulesStore.addSchedule([{
				ring_schedule_id: "rings1",
				lesson_ids: ["1", "1", "1"]
			}])
		}}>CUM</button>


		{ !(selectedDay?.lesson_ids?.length > selectedDayRings?.length) &&
			selectedDay.lesson_ids.map((index, itemId) => {
				const [lesson, lessonRings, breakStart, breakEnd] = getCardsData(index, itemId)

				return <React.Fragment key={itemId}>
					<LessonCard
						cabinet={lesson["cabinet"]}
						startTime={lessonRings["start"]}
						endTime={lessonRings["end"]}
						index={itemId + 1}
						lessonName={lesson["lesson_name"]}
						teacherName={lesson["teacher"]}
					/>

					<BreakCard
						startTime={breakStart as string | undefined}
						endTime={breakEnd as string | undefined}
					/>
				</React.Fragment>
			})
		}

	</>

	// i.e data for currnet LessonCard and BreackCard
	function getCardsData (index, itemId) {
		const lesson = lessons.find(i => i.id === index)
		const lessonRings = selectedDayRings[itemId]
		let breakStart = selectedDayRings[itemId]?.end
		let breakEnd = selectedDayRings[itemId + 1]?.start

		if (itemId + 1 >= selectedDay.lesson_ids.length ) {
			breakEnd = undefined
		}
		return [lesson, lessonRings, breakStart, breakEnd]
	}
}

export default observer(ComposedSchedule)