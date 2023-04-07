import { StyledComposedSchedules } from "./ComposedSchedules.styles"
import { Link } from "react-router-dom"
import GhostButton from "../../ui/GhostButton/GhostButton"
import ComposedSchedule from "../../smart/ComposedSchedule/ComposedSchedule"
import { IComposedSchedule } from "../../../core/types/types"

interface IProps {
	composedSchedules: IComposedSchedule[]
}

const ComposedSchedules: React.FC<IProps> = ({ composedSchedules }) => {
	return (
		<StyledComposedSchedules className="composed-schedules">
			
			{ composedSchedules.length === 0 &&
				<h2 style={{textAlign: 'center', fontWeight: 400}}>
					Тут нихера нет ¯\_(ツ)_/¯
				</h2>
			}

			{
				composedSchedules.map(schedule => (
					<ComposedSchedule name={schedule.name} days={schedule.days} key={schedule.uid} />
				))
			}

			{/* <ComposedSchedule /> */}

			<Link to="/add/composed">
				<GhostButton> Составить новое расписание <br/> <span className="plus">+</span></GhostButton>
			</Link>
		</StyledComposedSchedules>
	)
}

export default ComposedSchedules
