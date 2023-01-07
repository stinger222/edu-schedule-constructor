import { StyledComposedSchedule } from "./ComposedSchedule.styled"
import Day from "./Day/Day"

interface IProps {
	// scheduleData: IComposedSchedule // TODO
}

interface ComposedScheduleExtensions {
	Day: typeof Day
}

const ComposedSchedule: React.FC<IProps> & ComposedScheduleExtensions = ({  }) => {
	return (
		<StyledComposedSchedule>
			<Day
				dayIndex={6}
				lessons={2}
				startTime="10:00"
				endTime="11:00"
			/>
		</StyledComposedSchedule>
	)
}

ComposedSchedule.Day = Day

export default ComposedSchedule
