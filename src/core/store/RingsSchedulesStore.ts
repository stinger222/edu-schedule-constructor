import { nanoid } from "nanoid"
import { IRingsSchedule } from './../types/types'
import { IRingsSchedulesStore } from './../types/store'
import { makeAutoObservable, toJS } from 'mobx'

class RingsSchedulesStore implements IRingsSchedulesStore {
	ringsSchedules: IRingsSchedule[] = []

	constructor() {
    makeAutoObservable(this, {
      ringsSchedules: true
    })
  }

	addRingsSchedule(newRingsSchedule: Omit<IRingsSchedule, 'uid'>): void {
		this.ringsSchedules.push({...newRingsSchedule, uid: nanoid(10)})
	}

	removeSchedule(uid: string): boolean {
		const indexToDelete = this.ringsSchedules.findIndex(schedule => schedule.uid === uid)
		
		if (indexToDelete != -1) {
			const deletedSchedule = this.ringsSchedules.splice(indexToDelete, 1)
			console.log('Lesson deleted from store.', toJS(deletedSchedule[0]));
			return deletedSchedule.length === 1 
		}
		
		console.warn(`Rings schedule with id "${uid}" not found.`)
		return false
	}
}

export default RingsSchedulesStore