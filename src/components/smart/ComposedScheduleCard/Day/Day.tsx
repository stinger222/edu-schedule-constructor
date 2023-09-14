import { useContext } from "react"
import { WeekUtils } from "../../../../core/utils/dateTimeUtils"
import { IComposedDay, IRingsSchedule } from "../../../../core/types/types"
import { StoreContext } from "../../../.."
import { StyledDay } from "./Day.styled"
import { useTranslation } from "react-i18next"

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
    
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage as "ru" | "en"

  // Can be "undefined" if user deleted schedule that id is reffering to
	const thisDayRingsSchedule = ringsSchedulesStore.ringsSchedules.find(s => (
    s.uid === day.ringsScheduleId
  ))
  
  let startTime = "-:-"
  let endTime = "-:-"

  if (thisDayRingsSchedule) {
    [startTime, endTime] = getStartAndEndTime(thisDayRingsSchedule, day.lessonIds)
  }

  // If passed day contains <nothing> card, then it's filtered out
  const amountOfLessons = day.lessonIds.filter((i: string) => i !== "hidden").length

	const weekDay: string = WeekUtils.getShort(lang)[dayIndex]

	return (
		<StyledDay>
			<header>{ weekDay }</header>
      <div className="card-body">
				<span> {t("composedScheduleCard.lessonsAmount")} </span>
				<span>{ amountOfLessons || "0" }</span>

				<span> {t("composedScheduleCard.start")} </span>
				<span>{ startTime }</span>

				<span> {t("composedScheduleCard.end")} </span>
				<span>{ endTime }</span>
			</div>
		</StyledDay>
	)
}

export default Day

const getStartAndEndTime = (ringsSchedule: IRingsSchedule, lessonIds: string[]): [string, string] => {
  if (lessonIds.filter(l => l !== "hidden").length === 0) {
    return ["-:-", "-:-"]
  }
  
  const firstLessonIndex = lessonIds.findIndex(i => i !== "hidden") // index of first lesson that is not <nothing> plug

  const startTime = ringsSchedule.rings[firstLessonIndex]?.start || "-:-"
  const endTime = ringsSchedule.rings[lessonIds.length - 1]?.end || "-:-"

  return [startTime, endTime]
}