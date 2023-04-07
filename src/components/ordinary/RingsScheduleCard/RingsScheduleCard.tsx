import { Replacements } from "../../../core/types/types"
import { formatTimeString, replaceBlankProps } from "../../../core/utils/helpers"
import { StyledRingsScheduleCard } from "./RingsScheduleCard.styled"

interface IProps {
	length: number,
	start: string,
	end: string,
	name: string
}

const replacements: Replacements<IProps> = {
	start: "??:??",
	end: "??:??",
	name: 'Расписание звонков №??'
}

const RingsScheduleCard: React.FC<IProps> = (props) => {
	const { length, start, end } = replaceBlankProps<IProps>(props, replacements)

	return (
		<StyledRingsScheduleCard className="rings-schedule-card">
			<header>
				{props.name}
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
