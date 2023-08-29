import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"

import { capitalize } from "../utils/stringUtils"
import { IRingsSchedulesStore } from "./../types/store"
import { IRingsSchedule } from "./../types/types"

class RingsSchedulesStore implements IRingsSchedulesStore {
	ringsSchedules: IRingsSchedule[] = []
	storageKey: string = "rings"

	constructor() {
		makeAutoObservable(this)
		this.restoreState()
	}

	memorizeState(): void {
		localStorage.setItem(this.storageKey, JSON.stringify(this.ringsSchedules))
	}

	restoreState(): void {
		this.ringsSchedules = JSON.parse(localStorage.getItem(this.storageKey) || `[]`)
	}

	addSchedule(newRingsSchedule: Omit<IRingsSchedule, "uid">, uid?: string): void {
		newRingsSchedule.name = capitalize(newRingsSchedule.name)

		this.ringsSchedules.push({...newRingsSchedule, uid: uid || nanoid(10)})
		this.memorizeState()
	}

	removeSchedule(uid: string): boolean {
		const indexToDelete = this.ringsSchedules.findIndex(schedule => schedule.uid === uid)
		if (indexToDelete === -1) {
			console.warn(`Rings schedule with id "${uid}" not found.`)
			return false
		}

		const deletedSchedule = this.ringsSchedules.splice(indexToDelete, 1)
		console.log("Schedule deleted from store.", toJS(deletedSchedule[0]))
		this.memorizeState()
		return deletedSchedule.length === 1 
	}

	updateSchedule(uid: string, newSchedule: Partial<Omit<IRingsSchedule, "uid">>): boolean {
		const indexToUpdate = this.ringsSchedules.findIndex(s => s.uid === uid)

		if (indexToUpdate === -1) {
			console.warn(`Can't update.\nSchedule with id "${uid}" not found.`)
			return false
		}

		this.ringsSchedules[indexToUpdate] = {
			...this.ringsSchedules[indexToUpdate],
			...newSchedule
		}

		console.log("Schedule updated successfully.")
		return true
	}

  getById(uid: string): IRingsSchedule | undefined {
    return this.ringsSchedules.find(s => s.uid === uid)
  }
}

export default RingsSchedulesStore