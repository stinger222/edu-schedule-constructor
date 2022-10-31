import Container from "../../Container/Container"
import HeaderSecondary from "../../Header/HeaderSecondary"
import { StyledRingSchedules } from "./RingSchedules.styled"

const RingSchedules = () => {
	return (
		<StyledRingSchedules>
			<HeaderSecondary />
			<Container>
				<h1>Ring Schedules list will be here</h1>
			</Container>
		</StyledRingSchedules>
	)
}

export default RingSchedules
