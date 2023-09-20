import { useContext } from "react"
import { observer } from "mobx-react"
import { StoreContext } from "../../.."

import RootStore from "../../../core/store/RootStore"
import { IComposedSchedule, IClass, IClassSchedule} from "../../../core/types/types"

import ClassCard from "../../ordinary/ClassCard/ClassCard"
import Timeline from "../../ordinary/Timeline/Timeline"
import { EmptyDay } from "../../../core/utils/CustomErrors"
import { useTranslation } from "react-i18next"

const ScheduleItemsList = () => {
  const stores = useContext(StoreContext)
  const { t } = useTranslation()

  const activeComposedSchedule = stores.composedSchedulesStore.getActiveSchedule()
  const selectedDayIndex = stores.uiStore.selectedDayIndex

  const [classes, classSchedule] = getDataForSelectedDay(activeComposedSchedule, selectedDayIndex, stores)
  
  return (
    <div>
      {classes.map((cls: IClass, index: number) => (
        <div className="schedule-item" key={Math.random()}>

          <Timeline
            startTime={classSchedule.classes[index].start}
            endTime={classSchedule.classes[index].end}
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
 * This function returns everything that necessary to render composed schedule.
 * 
 * @param activeComposedSchedule - Is composed schedule that user selected to be shown on the main page
 * @param selectedDayIndex - Used to select what day will be rendered on the main page
 * @param stores - Is root store that combines all other mobx stores
 * 
 * @returns Array of class objects, data from witch will be used to rednder ClassCards on the right,
 * and classSchedule object that will be used to render Timeline segments on the left
*/

const getDataForSelectedDay = (
  activeComposedSchedule: IComposedSchedule | undefined | null,
  selectedDayIndex: number,
  stores: RootStore
): [(IClass | undefined)[], IClassSchedule]  => {
  
  if (!activeComposedSchedule) { //TODO: First case is impossible btw...
    throw new Error("Composed schedule not selected.\n\nOr if you haven't created any yet, please go to:\nMenu > Composed Schedules > Compose new schedule")
  }

  if (stores.composedSchedulesStore.dayIsEmptyOrUndefined(activeComposedSchedule.uid, selectedDayIndex)) {
    throw new EmptyDay()
  }

  const classScheduleIdForSelectedDay = activeComposedSchedule.days[selectedDayIndex].classScheduleId
  const classScheduleForSelectedDay = stores.classSchedulesStore.getById(classScheduleIdForSelectedDay)

  if (!classScheduleForSelectedDay) {
    throw new Error(`This day in "${activeComposedSchedule.name}" composed schedule is refering to class schedule that was deleted!\n\nTo fix that, change class schedule for this day in "${activeComposedSchedule.name}" composed schedule to existing one.\n\nYou can to that by swiping mentioned composed schedule card to the right in:\nMenu > Composed Schedules`)
  }

  const classIdsForSelectedDay = activeComposedSchedule.days[selectedDayIndex].classIds
  const classesForSelectedDay = classIdsForSelectedDay.map(id => stores.classesStore.findById(id))
  
  if (classIdsForSelectedDay.length === 0) {
    throw new Error(`I have no idea how you did this, but list of class IDs for this day is empty.\n
    That's weird cause you literally can't submit new composed schedule if you not selected at least one class.\n\n
    So since I don't even know how it is possible, I can't really give any advices on how to fix that :/\n\n
    Try to cmpose new schedule but... more careful? idk.\n\n
    Also I would appreciate if you will open issue on github with some ideas why this happened <3`)
  }

  return [classesForSelectedDay, classScheduleForSelectedDay]
}
