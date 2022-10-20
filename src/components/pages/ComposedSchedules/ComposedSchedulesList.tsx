import { useContext } from "react"
import { StoreContext } from "../../.."

const ComposedSchedulesList = () => {
	const { composedSchedulesStore } = useContext(StoreContext)

	return (
		<div>
			{
				composedSchedulesStore.schedules.map(schedule => {
					return <div style={{border: "2px solid black", padding:"1em", margin:"1em"}}>
						id: {schedule.id}
						<br/>
						days: {schedule.week.length}
					</div>
				})
			}
		</div>
	)
}

export default ComposedSchedulesList