import { useContext } from "react"
import { observer } from "mobx-react"
import { useTranslation } from "react-i18next"

import i18n from "../../../core/configs/i18next"
import RootStore from "../../../core/store/RootStore"
import { StoreContext } from "../../.."
import { IAssembledSchedule, IClass, IClassSchedule } from "../../../core/types/types"

import ClassCard from "../../ordinary/ClassCard/ClassCard"
import Timeline from "../../ordinary/Timeline/Timeline"
import Warning from "../../../core/errors/WarningError"
import DayOff from "../../../core/errors/DayOffError"

const ScheduleItemsList = () => {
  const stores = useContext(StoreContext)
  const { t } = useTranslation()
  
  const activeAssembledSchedule = stores.assembledSchedulesStore.getActiveSchedule()
  const selectedDayIndex = stores.uiStore.selectedDayIndex
  
  const [classes, classSchedule] = getDataForSelectedDay(activeAssembledSchedule, selectedDayIndex, stores)

  return (
    <div>
      {classes.map((cls: IClass, index: number) => (
        <div className="schedule-item" key={Math.random()}>

          <Timeline
            startTime={classSchedule.classes?.[index]?.start || "??:??"}
            endTime={classSchedule.classes?.[index]?.end || "??:??"}
          />

          <ClassCard
            title={cls?.title || t("classCard.classWasRemoved")}
            teacher={cls?.teacher || t("classCard.nobody")}
            cabinet={cls?.cabinet || t("classCard.noCabinet")}
          />

        </div>
      ))}
    </div>
  )
}

export default observer(ScheduleItemsList)

/**
 * This function returns everything that is necessary to render assembled schedule.
 * 
 * @param activeAssembledSchedule - Is assembled schedule that user selected to be shown on the main page
 * @param selectedDayIndex - Used to select what day will be rendered on the main page
 * @param stores - Is root store that combines all other mobx stores
 * 
 * @returns Array of class objects, data from witch will be used to rednder ClassCards on the right,
 * and classSchedule object that will be used to render Timeline segments on the left
*/
const getDataForSelectedDay = (
  activeAssembledSchedule: IAssembledSchedule | undefined | null,
  selectedDayIndex: number,
  stores: RootStore
): [(IClass | undefined)[], IClassSchedule]  => {

  if (!activeAssembledSchedule) {
    throw new Warning(i18n.t("warningException.messages.noAssembledShcedules"))
  }

  if (stores.assembledSchedulesStore.dayIsEmptyOrUndefined(activeAssembledSchedule.uid, selectedDayIndex)) {
    throw new DayOff()
  }

  const classScheduleIdForSelectedDay = activeAssembledSchedule.days[selectedDayIndex].classScheduleId
  const classScheduleForSelectedDay = stores.classSchedulesStore.getById(classScheduleIdForSelectedDay)

  if (!classScheduleForSelectedDay) {
    throw new Error(i18n.t("errorException.messages.refferingDeletedClassSchedule", {scheduleName: activeAssembledSchedule.name}))
  }

  const classIdsForSelectedDay = activeAssembledSchedule.days[selectedDayIndex].classIds
  const classesForSelectedDay = classIdsForSelectedDay.map(id => stores.classesStore.findById(id))

  return [classesForSelectedDay, classScheduleForSelectedDay]
}
