import { IComposedDay } from "../../../core/types/types"
import { StyledComposedSchedule } from "./ComposedSchedule.styled"
import Day from "./Day/Day"

interface IProps {
	name: string,
	days: IComposedDay[]
}

interface ComposedScheduleExtensions {
	Day: typeof Day
}

const ComposedSchedule: React.FC<IProps> & ComposedScheduleExtensions = ({ name, days }) => {

  return (
		<StyledComposedSchedule className="composed-schedule">
			<header>{ name }</header>
			<div className="days">

				{
					new Array(5).fill(0).map((_, index) => {
						const day = days[index]
						return (
							<Day
								dayIndex={index}
								day={day}
								key={index}
							/>
						)
					})
				}
			</div>
		</StyledComposedSchedule>
	)
}

ComposedSchedule.Day = Day

export default ComposedSchedule
