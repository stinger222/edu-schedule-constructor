import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../.."
import Container from "../../Container/Container"
import RingScheduleCard from "../../RingScheduleCard/RingScheduleCard"
import { StyledRingSchedules } from "./RingSchedules.styled"

const RingSchedulesList = () => {
	const { ringSchedulesStore } = useContext(StoreContext)
	const navigate = useNavigate()

	const onAdd = () => {
		navigate('/add/rings')
	}

	return (
		<StyledRingSchedules>
			<Container>
				{
					ringSchedulesStore.schedules.map(schedule => (
						<RingScheduleCard schedule={schedule} key={schedule.id}/>
					))
				}

				<button onClick={onAdd}>
					Добавить
				</button>
		</Container>	
		</StyledRingSchedules>
	)
}

export default RingSchedulesList
