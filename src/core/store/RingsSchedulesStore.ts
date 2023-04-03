import { makeAutoObservable, toJS } from 'mobx'
import { nanoid } from "nanoid"

interface IRingsSchedule {
	name: string,
	uid: string,
	rings: Array<{
		start: `${number}:${number}`,
		end: `${number}:${number}`
	}>
}

export class RingsSchedulesStore {
	ringsSchedules: IRingsSchedule[] = []

	constructor() {
    makeAutoObservable(this, {
      ringsSchedules: true
    })
  }

	addRingsSchedule(newRingsSchedule: Omit<IRingsSchedule, 'uid'>) {
		this.ringsSchedules.push({...newRingsSchedule, uid: 'dick2'})
	}

	removeSchedule(uid: string) {
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