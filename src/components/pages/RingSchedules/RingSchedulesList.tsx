import { useContext } from "react"
import { StoreContext } from "../../.."
import Container from "../../Container/Container"
import RingScheduleCard from "../../RingScheduleCard/RingScheduleCard"
import { StyledRingSchedules } from "./RingSchedules.styled"

const RingSchedulesList = () => {
	const { ringSchedulesStore } = useContext(StoreContext)

	return (
		<StyledRingSchedules>
			<Container>
				{
					ringSchedulesStore.schedules.map(schedule => (
						<RingScheduleCard schedule={schedule} key={schedule.id}/>
					))
				}
			</Container>
		</StyledRingSchedules>
	)
}

export default RingSchedulesList
