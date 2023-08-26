import { IComposedSchedulesStore } from "./../types/store"
import { IComposedSchedule } from "./../types/types"
import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"
import { capitalize } from "../utils/stringUtils"

class ComposedSchedulesStore implements IComposedSchedulesStore {
	composedSchedules: IComposedSchedule[] = []
	storageKey: string = "composed-schedules"
  activeScheduleUid: string | null = null

	constructor() {
		makeAutoObservable(this)
		this.restoreState()
	}

	memorizeState() {
		localStorage.setItem(this.storageKey, JSON.stringify(this.composedSchedules))
    this.activeScheduleUid && localStorage.setItem("active-composed-schedule-uid", this.activeScheduleUid)
	}

	restoreState() {
		this.composedSchedules = JSON.parse(localStorage.getItem(this.storageKey) ?? `[]`)
    this.activeScheduleUid = localStorage.getItem("active-composed-schedule-uid") || null
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
			console.warn(`Can't remove\n.Composed shcedule with id "${uid}" not found.`)
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
			console.warn(`Can't update.\nComposed schedule with id "${uid}" not found.`)
			return false
		}

		this.composedSchedules[indexToUpdate] = {
      ...this.composedSchedules[indexToUpdate],
			...newSchedule
		}

		console.log("Composed Sschedule updated successfully.")
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
}

export default ComposedSchedulesStore
