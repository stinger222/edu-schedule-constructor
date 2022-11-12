import Container from "../../Container/Container"
import HeaderSecondary from "../../Header/HeaderSecondary"
import RingSchdeuleRange from "../../RingSchdeuleRange/RingSchdeuleRange"
import { StyledAddRingSchdeulesPage } from "./AddRingSchedule.styled"

const AddRingSchedule = () => {
	return <>
		<HeaderSecondary />
		<Container>
			<StyledAddRingSchdeulesPage>
				<RingSchdeuleRange index={1} />
			</StyledAddRingSchdeulesPage>
		</Container>
	</>
}

export default AddRingSchedule
