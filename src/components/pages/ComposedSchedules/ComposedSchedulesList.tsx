import { useContext } from "react"
import { StoreContext } from "../../.."
import { StyledComposedSchedulesList } from "./ComposedSchedulesList.styled"

const ComposedSchedulesList = () => {
	const { composedSchedulesStore } = useContext(StoreContext)

	return (
		<StyledComposedSchedulesList>
			{
				composedSchedulesStore.schedules.map(schedule => {
					return <div>
						<p>id: {schedule.id}</p>
						<br/>
						{/* <p>days: {schedule.week}</p> */}
						<br/>
						<p>name: {schedule.name}</p>
						<br/>
					</div>
				})
			}
		</StyledComposedSchedulesList>
	)
}

export default ComposedSchedulesList