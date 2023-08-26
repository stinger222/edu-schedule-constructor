import { useContext } from "react"
import { observer } from "mobx-react"
import { StoreContext } from "../../.."

import RootStore from "../../../core/store/RootStore"
import { IComposedSchedule, ILesson, IRingsSchedule} from "../../../core/types/types"

import LessonCard from "../../ordinary/LessonCard/LessonCard"
import Timeline from "../../ordinary/Timeline/Timeline"
import Warning from "../../../core/utils/Warning"

const ScheduleItemsList = () => {
  const stores = useContext(StoreContext)

  const activeComposedSchedule = stores.composedSchedulesStore.getActiveSchedule()
  const selectedDayIndex = stores.uiStore.selectedDayIndex

  const [lessons, ringsSchedule] = getDataForSelectedDay(activeComposedSchedule, selectedDayIndex, stores)
  
  return (
    <div>
      {lessons.map((lesson: ILesson, index: number) => (
        <div className="schedule-item" key={lesson.uid + index}>

          <Timeline
            startTime={ringsSchedule.rings[index].start}
            endTime={ringsSchedule.rings[index].end}
          />

          <LessonCard
            title={lesson?.title || "<Пара была удалена>"}
            teacher={lesson?.teacher || "<Никто>"}
            cabinet={lesson?.cabinet || "???"}
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
 * @returns Array of lesson objects, data from witch will be used to rednder LessonCards on the right,
 * and ringsSchedule object that will be used to render Timeline segments on the left
*/

const getDataForSelectedDay = (
  activeComposedSchedule: IComposedSchedule | undefined | null,
  selectedDayIndex: number,
  stores: RootStore
): [(ILesson | undefined)[], IRingsSchedule]  => {
  
  if (!activeComposedSchedule) {
    throw new Error("Composed shcedule not selected.\n\nOr if you haven't created any yet, please go to:\nMenu > Composed Schedules > Compose new schedule")
  }

  if (!activeComposedSchedule.days[selectedDayIndex]) {
    throw new Warning("You didn't compose this day")
  }
  
  const ringsScheduleIdForSelectedDay = activeComposedSchedule.days[selectedDayIndex].ringsScheduleId
  const ringsScheduleForSelectedDay = stores.ringsSchedulesStore.findById(ringsScheduleIdForSelectedDay)

  if (!ringsScheduleForSelectedDay) {
    throw new Error(`This day in "${activeComposedSchedule.name}" composed schedule is refering to rings schedule that was deleted!\n\nTo fix that, change rings schedule for this day in "${activeComposedSchedule.name}" composed schedule to existing one.\n\nYou can to that by swiping mentioned composed schedule card to the right in:\nMenu > Composed Schedules`)
  }

  const lessonIdsForSelectedDay = activeComposedSchedule.days[selectedDayIndex].lessonIds
  const lessonsForSelectedDay = lessonIdsForSelectedDay.map(id => stores.lessonsStore.findById(id))
  
  if (lessonIdsForSelectedDay.length === 0) {
    throw new Error(`I have no idea how you did this, but list of lesson IDs for this day is empty.\n
    That's weird cause you literally can't submit new composed schedule if you not selected at least one lesson.\n\n
    So since I don't even know how it is possible, I can't really give any advices on how to fix that :/\n\n
    Try to cmpose new schedule but... more careful? idk.\n\n
    Also I would appreciate if you will open issue on github with some ideas why this happend <3`)
  }

  return [lessonsForSelectedDay, ringsScheduleForSelectedDay]
}
