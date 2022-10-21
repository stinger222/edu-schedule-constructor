import { weekDay } from './interfaces';
import { makeAutoObservable } from 'mobx';

export interface IUIStore {
	selectedDay: weekDay
	selectDay: (day: weekDay) => void
}

class UIStore implements IUIStore {
	selectedDay: weekDay = 'mon'

	constructor() {
		makeAutoObservable(this)
		this.selectedDay = this.getToday()
	}

	private getToday(): weekDay {
		let result = [null, 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][new Date().getDay()] as weekDay
		return result ?? 'mon'
	}

	selectDay = (day: weekDay) => {
		this.selectedDay = day
	}
}

export default UIStore