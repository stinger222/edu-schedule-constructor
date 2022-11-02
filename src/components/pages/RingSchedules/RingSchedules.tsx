import { useContext } from "react"
import { StoreContext } from "../../.."
import Container from "../../Container/Container"
import HeaderSecondary from "../../Header/HeaderSecondary"
import { StyledRingSchedules } from "./RingSchedules.styled"

const RingSchedules = () => {
	const { ringSchedulesStore } = useContext(StoreContext)

	return (
		<StyledRingSchedules>
			<HeaderSecondary />
			<Container>
				{
					ringSchedulesStore.schedules.map(schedule => (
						<div className="schedule_card">
							<h1 className="schedule_name">{schedule.name}</h1>
							<div className="schedule_desc">
								<div><span>Пар:</span><span>{schedule.rings.length}</span></div>
								<div><span>Начало:</span><span>{schedule.rings[0].start}</span></div>
								<div><span>Конец:</span><span>{schedule.rings[schedule.rings.length - 1].end}</span></div>
							</div>
						</div>
					))
				}
			</Container>
		</StyledRingSchedules>
	)
}

export default RingSchedules
