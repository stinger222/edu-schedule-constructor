import { capitalize } from "./../utils/helpers"
import { nanoid } from "nanoid"
import { IRingsSchedule } from "./../types/types"
import { IRingsSchedulesStore } from "./../types/store"
import { makeAutoObservable, toJS } from "mobx"

class RingsSchedulesStore implements IRingsSchedulesStore {
	ringsSchedules: IRingsSchedule[] = [
		{
			name: "Example Rings Schedule #1",
			rings: [{start: "08:00", end:"09:00"}],
			uid: "gdf4-2s39"
		},
		{
			name: "Some loong schedule",
			rings: [
				{start: "08:00", end:"09:00"},
				{start: "10:00", end:"11:00"},
				{start: "12:00", end:"13:00"},
				{start: "14:00", end:"15:00"}
			],
			uid: "f03h-9f73"
		}
	]

	constructor() {
		makeAutoObservable(this)
	}

	addRingsSchedule(newRingsSchedule: Omit<IRingsSchedule, "uid">): void {
		newRingsSchedule.name = capitalize(newRingsSchedule.name)
		
		this.ringsSchedules.push({...newRingsSchedule, uid: nanoid(10)})
	}

	removeSchedule(uid: string): boolean {
		const indexToDelete = this.ringsSchedules.findIndex(schedule => schedule.uid === uid)
		
		if (indexToDelete != -1) {
			const deletedSchedule = this.ringsSchedules.splice(indexToDelete, 1)
			console.log("Lesson deleted from store.", toJS(deletedSchedule[0]))
			return deletedSchedule.length === 1 
		}
		
		console.warn(`Rings schedule with id "${uid}" not found.`)
		return false
	}
}

export default RingsSchedulesStore