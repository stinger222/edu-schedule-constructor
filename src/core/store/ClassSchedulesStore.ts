import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"

import { capitalize } from "../utils/stringUtils"
import { IClassSchedulesStore } from "../types/store"
import { IClassSchedule } from "../types/types"

class ClassSchedulesStore implements IClassSchedulesStore {
	classSchedules: IClassSchedule[] = []
	static storageKey: string = "class-schedules"

	constructor() {
		makeAutoObservable(this)
		this.restoreState()
	}

	memorizeState(): void {
		localStorage.setItem(ClassSchedulesStore.storageKey, JSON.stringify(this.classSchedules))
	}

	restoreState(): void {
    try {
      this.classSchedules = JSON.parse(localStorage.getItem(ClassSchedulesStore.storageKey) || `[]`)
    } catch(err) {
      console.error(`Fatal error occurred. Can't parse "${ClassSchedulesStore.storageKey}" from local storage, so it's value will be cleared.`)
      console.error(err.message)
      
      this.classSchedules = []
      this.memorizeState()
    }
	}

	addSchedule(newClassSchedule: Omit<IClassSchedule, "uid">, uid?: string): void {
		this.classSchedules.push({
      ...newClassSchedule,
      name: capitalize(newClassSchedule.name) || `Class Schedule №${this.classSchedules.length+1}`, 
      uid: uid || nanoid(10)
    })

		this.memorizeState()
	}

	removeSchedule(uid: string): boolean {
		const indexToDelete = this.classSchedules.findIndex(schedule => schedule.uid === uid)
		if (indexToDelete === -1) {
			console.warn(`Class schedule with id "${uid}" not found.`)
			return false
		}

		const deletedSchedule = this.classSchedules.splice(indexToDelete, 1)
		console.log("Schedule deleted from store.", toJS(deletedSchedule[0]))
		this.memorizeState()
		return deletedSchedule.length === 1 
	}

	updateSchedule(uid: string, newSchedule: Partial<Omit<IClassSchedule, "uid">>): boolean {
		const indexToUpdate = this.classSchedules.findIndex(s => s.uid === uid)

		if (indexToUpdate === -1) {
			console.warn(`Can't update.\nSchedule with id "${uid}" not found.`)
			return false
		}

		this.classSchedules[indexToUpdate] = {
			...this.classSchedules[indexToUpdate],
			...newSchedule
		}

		console.log("Schedule updated successfully.")
		return true
	}

  getById(uid: string): IClassSchedule | undefined {
    return this.classSchedules.find(s => s.uid === uid)
  }
}

export default ClassSchedulesStore