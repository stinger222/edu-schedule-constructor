import { useContext } from "react"
import { WeekUtils } from "../../../../core/utils/dateTimeUtils"
import { IAssembledDay, IClassSchedule } from "../../../../core/types/types"
import { StoreContext } from "../../../.."
import { StyledDay } from "./Day.styled"
import { useTranslation } from "react-i18next"

interface IProps {
	dayIndex: number,
	day: IAssembledDay
}

const emptyDay: IAssembledDay = {
	classIds: [],
	classScheduleId: "there-is-for-sure-no-such-id"
}

const Day = ({ dayIndex, day = emptyDay }: IProps) => {
	const { classSchedulesStore: classSchedulesStore } = useContext(StoreContext)
    
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage as "ru" | "en"

  // Can be "undefined" if user deleted schedule that id is reffering to
	const thisDayClassSchedule = classSchedulesStore.classSchedules.find(s => (
    s.uid === day.classScheduleId
  ))
  
  let startTime = "-:-"
  let endTime = "-:-"

  if (thisDayClassSchedule) {
    [startTime, endTime] = getStartAndEndTime(thisDayClassSchedule, day.classIds)
  }

  // If passed day contains <nothing> card, then it's filtered out
  const amountOfClasses = day.classIds.filter((i: string) => i !== "hidden").length

	const weekDay: string = WeekUtils.getShort(lang)[dayIndex]

	return (
		<StyledDay>
			<header>{ weekDay }</header>
      <div className="card-body">
				<span> {t("assembledScheduleCard.classesAmount")} </span>
				<span>{ amountOfClasses || "0" }</span>

				<span> {t("assembledScheduleCard.start")} </span>
				<span>{ startTime }</span>

				<span> {t("assembledScheduleCard.end")} </span>
				<span>{ endTime }</span>
			</div>
		</StyledDay>
	)
}

export default Day

const getStartAndEndTime = (classSchedule: IClassSchedule, classIds: string[]): [string, string] => {
  if (classIds.filter(l => l !== "hidden").length === 0) {
    return ["-:-", "-:-"]
  }
  
  const firstClassIndex = classIds.findIndex(i => i !== "hidden") // index of first class that is not <nothing> plug

  const startTime = classSchedule.classes[firstClassIndex]?.start || "-:-"
  const endTime = classSchedule.classes[classIds.length - 1]?.end || "-:-"

  return [startTime, endTime]
}