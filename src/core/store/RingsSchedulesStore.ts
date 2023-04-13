import { capitalize } from "./../utils/helpers"
import { nanoid } from "nanoid"
import { IRingsSchedule } from "./../types/types"
import { IRingsSchedulesStore } from "./../types/store"
import { makeAutoObservable, toJS } from "mobx"

class RingsSchedulesStore implements IRingsSchedulesStore {
	ringsSchedules: IRingsSchedule[] = [
		// {
		// 	name: "Example Rings Schedule #1",
		// 	rings: [{start: "08:00", end:"09:00"}],
		// 	uid: "gdf4-2s39"
		// },
		// {
		// 	name: "Some loong schedule",
		// 	rings: [
		// 		{start: "08:00", end:"09:00"},
		// 		{start: "10:00", end:"11:00"},
		// 		{start: "12:00", end:"13:00"},
		// 		{start: "14:00", end:"15:00"}
		// 	],
		// 	uid: "f03h-9f73"
		// }
	]

	constructor() {
		makeAutoObservable(this)
	}

	addSchedule(newRingsSchedule: Omit<IRingsSchedule, "uid">, uid?: string): void {
		newRingsSchedule.name = capitalize(newRingsSchedule.name)

		this.ringsSchedules.push({...newRingsSchedule, uid: uid || nanoid(10)})
	}

	removeSchedule(uid: string): boolean {
		const indexToDelete = this.ringsSchedules.findIndex(schedule => schedule.uid === uid)
		if (indexToDelete === -1) {
			console.warn(`Rings schedule with id "${uid}" not found.`)
			return false
		}

		const deletedSchedule = this.ringsSchedules.splice(indexToDelete, 1)
		console.log("Schedule deleted from store.", toJS(deletedSchedule[0]))
		return deletedSchedule.length === 1 
	}

	updateSchedule(uid: string, newSchedule: Omit<IRingsSchedule, "uid">): boolean {
		const indexToUpdate = this.ringsSchedules.findIndex(s => s.uid === uid)

		if (indexToUpdate === -1) {
			console.warn(`Can't update.\nSchedule with id "${uid}" not found.`)
			return false
		}

		this.ringsSchedules[indexToUpdate] = {
			uid,
			...newSchedule
		}

		console.log("Schedule updated successfully.")
		return true
	}
}

export default RingsSchedulesStore