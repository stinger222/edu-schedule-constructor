import GhostButton from "../../ui/GhostButton/GhostButton"
import ComposedSchedule from "../../smart/ComposedSchedule/ComposedSchedule"
import { StyledComposedSchedules } from "./ComposedSchedules.styles"

const ComposedSchedules = () => {
	return (
		<StyledComposedSchedules className="composed-schedules">
			<ComposedSchedule />
			<ComposedSchedule />

			<GhostButton> Составить новое расписание </GhostButton>
		</StyledComposedSchedules>
	)
}

export default ComposedSchedules
