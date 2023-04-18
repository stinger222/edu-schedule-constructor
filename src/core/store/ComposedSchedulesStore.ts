import { IComposedSchedulesStore } from "./../types/store"
import { IComposedSchedule } from "./../types/types"
import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"
import { capitalize } from "../utils/stringUtils"

class ComposedSchedulesStore implements IComposedSchedulesStore {
	composedSchedules: IComposedSchedule[] = []
	storageKey: string = "composed-schedules"

	constructor() {
		makeAutoObservable(this)
		this.restoreState()
	}
	
	memorizeState() {
		localStorage.setItem(this.storageKey, JSON.stringify(this.composedSchedules))
	}

	restoreState() {
		this.composedSchedules = JSON.parse(localStorage.getItem(this.storageKey) ?? `[]`)
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

	updateSchedule(uid: string, newSchedule: Omit<IComposedSchedule, "uid">): boolean {
		const indexToUpdate = this.composedSchedules.findIndex(s => s.uid === uid)

		if (indexToUpdate === -1) {
			console.warn(`Can't update.\nComposed schedule with id "${uid}" not found.`)
			return false
		}

		this.composedSchedules[indexToUpdate] = {
			uid,
			...newSchedule
		}

		console.log("Composed Sschedule updated successfully.")
		return true
	}
}

export default ComposedSchedulesStore