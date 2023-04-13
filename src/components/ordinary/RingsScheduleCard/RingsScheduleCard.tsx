import { formatTimeString } from "../../../core/utils/stringUtils"
import { StyledRingsScheduleCard } from "./RingsScheduleCard.styled"

interface IProps {
	length: number,
	start: string,
	end: string,
	name: string
}

const RingsScheduleCard: React.FC<IProps> = ({ length, start, end, name }) => {

	return (
		<StyledRingsScheduleCard className="rings-schedule-card">
			<header>
				{name}
			</header>
			<div className="details">
				<div>Пар - <span className="value">{length}</span></div>
				<div>Начало - <span className="value">{ formatTimeString(start) }</span></div>
				<div>Конец - <span className="value">{ formatTimeString(end) }</span></div>
			</div>
		</StyledRingsScheduleCard>
	)
}

export default RingsScheduleCard
