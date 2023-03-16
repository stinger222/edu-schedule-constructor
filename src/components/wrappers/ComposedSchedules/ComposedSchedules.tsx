import { StyledComposedSchedules } from "./ComposedSchedules.styles"
import ComposedSchedule from "../../smart/ComposedSchedule/ComposedSchedule"

const ComposedSchedules = () => {
	return (
		<StyledComposedSchedules className="composed-schedules">
			<ComposedSchedule />
			<ComposedSchedule />
		</StyledComposedSchedules>
	)
}

export default ComposedSchedules
