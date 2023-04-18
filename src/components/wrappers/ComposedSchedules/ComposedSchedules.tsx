import { StyledComposedSchedules } from "./ComposedSchedules.styles"
import { Link } from "react-router-dom"
import GhostButton from "../../ui/GhostButton/GhostButton"
import ComposedSchedule from "../../smart/ComposedSchedule/ComposedSchedule"
import { IComposedSchedule } from "../../../core/types/types"
import { observer } from "mobx-react"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"

interface IProps {
	composedSchedules: IComposedSchedule[],
	removeSchedule: (uid: string) => boolean
}

const ComposedSchedules: React.FC<IProps> = ({ composedSchedules, removeSchedule }) => {
	return (
		<StyledComposedSchedules className="composed-schedules">
			
			{ composedSchedules.length === 0 &&
				<h2 style={{textAlign: "center", fontWeight: 400}}>
					Тут нихера нет ¯\_(ツ)_/¯
				</h2>
			}

			{
				composedSchedules.map(schedule => (
					<SwipeToAction  onSwipe={() => removeSchedule(schedule.uid)} key={schedule.uid}>
						<ComposedSchedule name={schedule.name} days={schedule.days}/>
					</SwipeToAction>
				))
			}

			<Link to="/add/composed">
				<GhostButton> Составить новое расписание <br/> <span className="plus">+</span></GhostButton>
			</Link>
		</StyledComposedSchedules>
	)
}

export default observer(ComposedSchedules)
