import { weekDaysRus } from "../../../../core/constants/constants"
import { Replacements } from "../../../../core/types/types"
import { replaceBlankProps } from "../../../../core/utils/helpers"
import { StyledDay } from "./Day.styled"

interface IProps {
	lessons: number,
	startTime: string,
	endTime: string,
	dayIndex: number
}

const propsReplacements: Replacements<IProps> = {
	startTime: "??:??",
	endTime: "??:??"
}

const Day: React.FC<IProps> = (props: IProps) => {
	const { lessons, startTime, endTime, dayIndex } = replaceBlankProps<IProps>(props, propsReplacements)
	const weekDay: string = weekDaysRus[dayIndex]

	return (
		<StyledDay>
			<header>{ weekDay }</header>
			<div className="card-body">
				<span>Пар</span>
				<span>{ lessons }</span>

				<span>Начало</span>
				<span>{ startTime }</span>

				<span>Конец</span>
				<span>{ endTime }</span>
			</div>
		</StyledDay>
	)
}

export default Day
