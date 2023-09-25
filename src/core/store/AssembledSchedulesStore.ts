import { nanoid } from "nanoid"
import { makeAutoObservable, toJS } from "mobx"
import { IAssembledSchedulesStore } from "../types/store"
import { IAssembledSchedule } from "../types/types"
import { capitalize } from "../utils/stringUtils"

class AssembledSchedulesStore implements IAssembledSchedulesStore {
	assembledSchedules: IAssembledSchedule[] = []
	static storageKey: string = "assembled-schedules"
  static activeScheduleUidStorageKey = "active-assembled-schedule-uid"
  activeScheduleUid: string | null = null // schedule that will be rendered on the main page

	constructor() {
		makeAutoObservable(this)
		this.restoreState()
	}

	memorizeState(): void {
		localStorage.setItem(AssembledSchedulesStore.storageKey, JSON.stringify(this.assembledSchedules))
    this.activeScheduleUid && localStorage.setItem(AssembledSchedulesStore.activeScheduleUidStorageKey, this.activeScheduleUid)
	}

	restoreState(): void {
    try {
      this.assembledSchedules = JSON.parse(localStorage.getItem(AssembledSchedulesStore.storageKey) || `[]`)
    } catch (err) {
      console.error(`Fatal error occurred. Can't parse "${AssembledSchedulesStore.storageKey}" from local storage, so it's value will be cleared.`)
      console.error(err.message)
      
      this.assembledSchedules = []
      this.memorizeState()
    }
    this.activeScheduleUid = localStorage.getItem(AssembledSchedulesStore.activeScheduleUidStorageKey) || null
	}

	addSchedule(newSchedule: Omit<IAssembledSchedule, "uid">, uid?: string) {
		this.assembledSchedules.push({
			...newSchedule,
			uid: uid || nanoid(10),
			name: capitalize(newSchedule.name)
		})
		this.memorizeState()
	}

	removeSchedule(uid: string): boolean {
		const indexToDelete = this.assembledSchedules.findIndex(schedule => schedule.uid === uid)
		if (indexToDelete === -1) {
			console.warn(`Can't remove\n.Assembled schedule with id: "${uid}" not found.`)
			return false
		}
		
		const deletedSchedule = this.assembledSchedules.splice(indexToDelete, 1)

		this.memorizeState()
		console.log("Class deleted from store.", toJS(deletedSchedule[0]))
    
		return deletedSchedule.length === 1 
	}

	updateSchedule(uid: string, newSchedule: Partial<Omit<IAssembledSchedule, "uid">>): boolean {
		const indexToUpdate = this.assembledSchedules.findIndex(s => s.uid === uid)
		if (indexToUpdate === -1) {
			console.warn(`Can't update.\nAssembled schedule with id: "${uid}" not found.`)
			return false
		}

		this.assembledSchedules[indexToUpdate] = {
      ...this.assembledSchedules[indexToUpdate],
			...newSchedule
		}

    this.memorizeState()
		console.log("Assembled Schedule updated successfully.")

		return true
	}

  activateSchedule(uid: string) {
    this.activeScheduleUid = uid
    this.memorizeState()
  }

  // "get" doesn't really fit here, but neither anything else I can think of...
  getActiveSchedule(): IAssembledSchedule | null {
    // it's can only be null if activeScheduleUid === null, or activeScheduleUid is refering deleted schedule
    const activeSchedule = this.assembledSchedules.find(s => s.uid === this.activeScheduleUid) || null
    
    // if it's there - return it
    if (activeSchedule) return activeSchedule

    // if not, then it tries to activate and return first schedule
    if (!activeSchedule && this.assembledSchedules.length !== 0) {
      this.activateSchedule(this.assembledSchedules[0].uid)
      return this.assembledSchedules[0]
    }
    
    // and only if there is no assembled schedules...
    return null
  }

  getById(uid: string) {
    return this.assembledSchedules.find(s => s.uid === uid)
  }

  dayIsEmptyOrUndefined(scheduleUid: string, dayIndex: number): boolean {
    const targetSchedule = this.getById(scheduleUid)

    if (!targetSchedule) throw new Error(`Assembled schedule with passed id: ${scheduleUid} is not present in the store... somehow...`)
    
    const targetDay = targetSchedule.days[dayIndex]

    if (!targetDay) return true

    return targetDay.classIds.filter(l => l !== "hidden").length === 0
  }
}

export default AssembledSchedulesStore
