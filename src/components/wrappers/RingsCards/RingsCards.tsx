import { Link } from "react-router-dom"
import { IRingsSchedule } from "../../../core/types/types"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import RingsScheduleCard from "../../ordinary/RingsScheduleCard/RingsScheduleCard"
import GhostButton from "../../ui/GhostButton/GhostButton"
import { StyledRingsCards } from "./RingsCards.styled"

interface IProps {
	ringsSchedules: IRingsSchedule[]
}

const RingsCards: React.FC<IProps> = ({ ringsSchedules }) => {

	const handleSwipe = () => {
		console.log("Swiped")
	}

	return (
		<StyledRingsCards className="rings-cards">

			{	ringsSchedules.length === 0 &&
				<h2 style={{textAlign: "center", fontWeight: 400}}>
					Тут нихера нет ¯\_(ツ)_/¯
				</h2>
			}

			{
				ringsSchedules.map(({rings, name, uid}) => (
					<SwipeToAction onSwipe={handleSwipe} key={uid}>
						<RingsScheduleCard
							start={rings[0].start}
							end={rings[rings.length-1].end}
							length={rings.length}
							name={name}
							
						/>
					</SwipeToAction>
				))
			}

			<Link to="/add/rings">
				<GhostButton>Добавить расписание звонков <span className="plus">+</span></GhostButton>
			</Link>
		</StyledRingsCards>
	)
}

export default RingsCards
