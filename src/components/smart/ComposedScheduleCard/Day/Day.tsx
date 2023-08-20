import { useContext } from "react"
import { WeekDays } from "../../../../core/utils/dateTimeUtils"
import { IComposedDay } from "../../../../core/types/types"
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

  // Can be undefined if used deleted rings schedule but we still store it's id
	const thisDayRingsSchedule = ringsSchedulesStore.ringsSchedules.find(s => (
    s.uid === day.ringsScheduleId
  ))

  
  let startTime = "??:??"
  let endTime = "??:??"

  if (thisDayRingsSchedule) {
    startTime = thisDayRingsSchedule.rings[0].start
    endTime = thisDayRingsSchedule.rings?.[day.lessonIds.length - 1]?.end || "?"
  }

	const weekDay: string = WeekDays.getShort()[dayIndex]

	return (
		<StyledDay>
			<header>{ weekDay }</header>
			<div className="card-body">
				<span>Пар</span>
				<span>{ day?.lessonIds?.length || "?" }</span>

				<span>Начало</span>
				<span>{ startTime }</span>

				<span>Конец</span>
				<span>{ endTime }</span>
			</div>
		</StyledDay>
	)
}

export default Day
