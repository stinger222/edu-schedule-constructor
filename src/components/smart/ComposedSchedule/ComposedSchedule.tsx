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
		<StyledComposedSchedule className="composed-schedule">
			<header>Расписание #1</header>
			<div className="days">
				<Day
					dayIndex={6}
					lessons={2}
					startTime="10:00"
					endTime="11:00"
				/>
				<Day
					dayIndex={6}
					lessons={2}
					startTime="10:00"
					endTime="11:00"
				/>
				<Day
					dayIndex={6}
					lessons={2}
					startTime="10:00"
					endTime="11:00"
				/>
				<Day
					dayIndex={6}
					lessons={2}
					startTime="10:00"
					endTime="11:00"
				/>
				<Day
					dayIndex={6}
					lessons={2}
					startTime="10:00"
					endTime="11:00"
				/>
			</div>
		</StyledComposedSchedule>
	)
}

ComposedSchedule.Day = Day

export default ComposedSchedule
