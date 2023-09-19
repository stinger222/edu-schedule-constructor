import { IComposedSchedulesStore } from "./../types/store"
import { IComposedSchedule } from "./../types/types"
import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"
import { capitalize } from "../utils/stringUtils"

class ComposedSchedulesStore implements IComposedSchedulesStore {
	composedSchedules: IComposedSchedule[] = []
	static storageKey: string = "composed-schedules"
  static activeScheduleUidStorageKey = "active-composed-schedule-uid"
  activeScheduleUid: string | null = null // schedule that will be rendered on the main page

	constructor() {
		makeAutoObservable(this)
		this.restoreState()
	}

	memorizeState(): void {
		localStorage.setItem(ComposedSchedulesStore.storageKey, JSON.stringify(this.composedSchedules))
    this.activeScheduleUid && localStorage.setItem(ComposedSchedulesStore.activeScheduleUidStorageKey, this.activeScheduleUid)
	}

	restoreState(): void {
    try {
      this.composedSchedules = JSON.parse(localStorage.getItem(ComposedSchedulesStore.storageKey) || `[]`)
    } catch (err) {
      console.error(`Fatal error occurred. Can't parse "${ComposedSchedulesStore.storageKey}" from local storage, so it's value will be cleared.`)
      console.error(err.message)
      
      this.composedSchedules = []
      this.memorizeState()
    }
    this.activeScheduleUid = localStorage.getItem(ComposedSchedulesStore.activeScheduleUidStorageKey) || null
	}

	addSchedule(newSchedule: Omit<IComposedSchedule, "uid">, uid?: string) {
		this.composedSchedules.push({
			...newSchedule,
			uid: uid || nanoid(10),
			name: capitalize(newSchedule.name)
		})
		this.memorizeState()
	}

	removeSchedule(uid: string): boolean {
		const indexToDelete = this.composedSchedules.findIndex(schedule => schedule.uid === uid)
		if (indexToDelete === -1) {
			console.warn(`Can't remove\n.Composed schedule with id: "${uid}" not found.`)
			return false
		}
		
		const deletedSchedule = this.composedSchedules.splice(indexToDelete, 1)
		console.log("Lesson deleted from store.", toJS(deletedSchedule[0]))
		this.memorizeState()
		return deletedSchedule.length === 1 
	}

	updateSchedule(uid: string, newSchedule: Partial<Omit<IComposedSchedule, "uid">>): boolean {
		const indexToUpdate = this.composedSchedules.findIndex(s => s.uid === uid)
		if (indexToUpdate === -1) {
			console.warn(`Can't update.\nComposed schedule with id: "${uid}" not found.`)
			return false
		}

		this.composedSchedules[indexToUpdate] = {
      ...this.composedSchedules[indexToUpdate],
			...newSchedule
		}

		console.log("Composed Schedule updated successfully.")
		return true
	}

  activateSchedule(uid: string) {
    this.activeScheduleUid = uid
    this.memorizeState()
  }

  // "get" doesn't really fit here, but neither anything else I can think of...
  getActiveSchedule(): IComposedSchedule | null {
    // it's can only be null if activeScheduleUid === null, or activeScheduleUid is refering deleted schedule
    const activeSchedule = this.composedSchedules.find(s => s.uid === this.activeScheduleUid) || null
    
    // if it's there - return it
    if (activeSchedule) return activeSchedule

    // if not, then it tries to activate and return first schedule
    if (!activeSchedule && this.composedSchedules.length !== 0) {
      this.activateSchedule(this.composedSchedules[0].uid)
      return this.composedSchedules[0]
    }
    
    // and only if there is no composed schedules...
    return null
  }

  getById(uid: string) {
    return this.composedSchedules.find(s => s.uid === uid)
  }

  dayIsEmptyOrUndefined(scheduleUid: string, dayIndex: number): boolean {
    const targetSchedule = this.getById(scheduleUid)

    if (!targetSchedule) throw new Error(`Composed schedule with passed id: ${scheduleUid} is not present in the store`)
    
    const targetDay = targetSchedule.days[dayIndex]

    if (!targetDay) return true

    return targetDay.lessonIds.filter(l => l !== "hidden").length === 0
  }
}

export default ComposedSchedulesStore
