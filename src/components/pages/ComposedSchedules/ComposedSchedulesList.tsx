import { observer } from "mobx-react"
import { nanoid } from "nanoid"
import { useContext } from "react"
import { StoreContext } from "../../.."
import ComposedScheduleCard from "../../ComposedSchedule/ComposedScheduleCard"
import Container from "../../Container/Container"


const ComposedSchedulesList = () => {
	const { composedSchedulesStore } = useContext(StoreContext)

	return (
		<Container>
			<button onClick={() => {
				const _id = nanoid(6)
				composedSchedulesStore.addSchedule({
					mon: {
						lesson_ids: '1'.repeat(Math.random()* 4).split(''),
						ring_schedule_id: 'rings1'
					},
					tue: {
						lesson_ids: '1'.repeat(Math.random()* 4).split(''),
						ring_schedule_id: 'rings1'
					},
					wed: {
						lesson_ids: '1'.repeat(Math.random()* 4).split(''),
						ring_schedule_id: 'rings1'
					},
					thu: {
						lesson_ids: '1'.repeat(Math.random()* 4).split(''),
						ring_schedule_id: 'rings1'
					},
					fri: {
						lesson_ids: '1'.repeat(Math.random()* 4).split(''),
						ring_schedule_id: 'rings1'
					},
					sat: {
						lesson_ids: '1'.repeat(Math.random()* 4).split(''),
						ring_schedule_id: 'rings1'
					}
				}, _id)
				composedSchedulesStore.selectSchedule(_id)
			}} style={{marginBottom: "0.5em"}}>Generate and Select Schedule</button>
			{
				composedSchedulesStore.schedules.map(schedule => (
					<ComposedScheduleCard
						key={schedule.id}
						id={schedule.id}
						name={schedule.name}
						week={schedule.week}
					/>
				))
			}
		</Container>
	)
}

export default observer(ComposedSchedulesList)