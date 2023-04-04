import { IComposedSchedulesStore } from './../types/store'
import { IComposedSchedule } from './../types/types'
import { makeAutoObservable, toJS } from 'mobx'
import { nanoid } from 'nanoid'

class ComposedSchedulesStore implements IComposedSchedulesStore {
	composedSchedules: IComposedSchedule[] = []

	constructor() {
		makeAutoObservable(this)
	}

	addSchedule(newSchedule: Omit<IComposedSchedule, 'uid'>) {
		this.composedSchedules.push({
			uid: nanoid(10),
			days: [...newSchedule.days]
		})
	}

	removeSchedule(uid: string): boolean {
		const indexToDelete = this.composedSchedules.findIndex(schedule => schedule.uid === uid)
		
		if (indexToDelete != -1) {
			const deletedSchedule = this.composedSchedules.splice(indexToDelete, 1)
			console.log('Lesson deleted from store.', toJS(deletedSchedule[0]));
			return deletedSchedule.length === 1 
		}
		
		console.warn(`Composed shcedule with id "${uid}" not found.`)
		return false
	}
}

export default ComposedSchedulesStore