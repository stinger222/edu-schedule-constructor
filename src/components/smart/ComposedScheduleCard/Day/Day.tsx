import { useContext } from "react"
import { WeekDays } from "../../../../core/utils/dateTimeUtils"
import { IComposedDay, IRingsSchedule } from "../../../../core/types/types"
import { StoreContext } from "../../../.."
import { StyledDay } from "./Day.styled"

interface IProps {
	dayIndex: number,
	day: IComposedDay
}

const emptyDay: IComposedDay = {
	lessonIds: [],
	ringsScheduleId: "there-is-for-sure-no-such-id"
}

const Day: React.FC<IProps> = ({ dayIndex, day = emptyDay }) => {
	const { ringsSchedulesStore } = useContext(StoreContext)

  // Can be "undefined" if user deleted schedule that id is reffering to
	const thisDayRingsSchedule = ringsSchedulesStore.ringsSchedules.find(s => (
    s.uid === day.ringsScheduleId
  ))
  
  let startTime = "??:??"
  let endTime = "??:??"

  if (thisDayRingsSchedule) {
    [startTime, endTime] = getStartAndEndTime(thisDayRingsSchedule, day.lessonIds)
  }

  // If passed day contains <nothing> card, then it's filtered out
  const amountOfLessons = day.lessonIds.filter((i: string) => i !== "hidden").length

	const weekDay: string = WeekDays.getShort()[dayIndex]

	return (
		<StyledDay>
			<header>{ weekDay }</header>
			<div className="card-body">
				<span>Пар</span>
				<span>{ amountOfLessons || "?" }</span>

				<span>Начало</span>
				<span>{ startTime }</span>

				<span>Конец</span>
				<span>{ endTime }</span>
			</div>
		</StyledDay>
	)
}

export default Day

const getStartAndEndTime = (ringsSchedule: IRingsSchedule, lessonIds: string[]): [string, string] => {
  const firstLessonIndex = lessonIds.findIndex(i => i !== "hidden") // index of first lesson that is not <nothing> plug

  const startTime = ringsSchedule.rings[firstLessonIndex].start
  const endTime = ringsSchedule.rings[lessonIds.length - 1]?.end || "?" // considering that user will not put <nothing> lesson(s) at the end... (yea, sure :D)

  return [startTime, endTime]
}