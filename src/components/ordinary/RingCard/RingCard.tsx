import { Replacements } from "../../../core/types/types"
import { formatTimeString, replaceBlankProps } from "../../../core/utils/helpers"
import { StyledRingCard } from "./RingCard.styled"

interface IProps {
	length: number,
	start: string,
	end: string
}

const replacements: Replacements<IProps> = {
	start: "??:??",
	end: "??:??"
}

const RingCard: React.FC<IProps> = (props) => {
	const { length, start, end } = replaceBlankProps<IProps>(props, replacements)

	return (
		<StyledRingCard className="ring-card">
			<header>
				Расписание звонков №1
			</header>
			<div className="details">
				<div>Пар - <span className="value">{length}</span></div>
				<div>Начало - <span className="value">{ formatTimeString(start) }</span></div>
				<div>Конец - <span className="value">{ formatTimeString(end) }</span></div>
			</div>
		</StyledRingCard>
	)
}

export default RingCard
