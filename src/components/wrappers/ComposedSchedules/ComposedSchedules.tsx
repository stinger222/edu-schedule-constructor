import { StyledComposedSchedules } from "./ComposedSchedules.styles"
import { Link } from "react-router-dom"
import GhostButton from "../../ui/GhostButton/GhostButton"
import ComposedSchedule from "../../smart/ComposedSchedule/ComposedSchedule"

const ComposedSchedules = () => {
	return (
		<StyledComposedSchedules className="composed-schedules">
			<ComposedSchedule />
			<ComposedSchedule />

			<Link to="/add/composed">
				<GhostButton> Составить новое расписание <br/> <span className="plus">+</span></GhostButton>
			</Link>
		</StyledComposedSchedules>
	)
}

export default ComposedSchedules
