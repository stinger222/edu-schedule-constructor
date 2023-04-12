import { useContext } from "react"
import { StoreContext } from "../../../.."
import { IComposedDay } from "../../../../core/types/types"
import { WeekDays } from "../../../../core/utils/helpers"
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

	const thisDayRingsSchedule = ringsSchedulesStore.ringsSchedules.find(s => s.uid === day.ringsScheduleId)

	const startTime = thisDayRingsSchedule?.rings?.[0]?.start || "??:??"
	const endTime = thisDayRingsSchedule?.rings?.[day.lessonIds.length - 1]?.end || "??:??"

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
