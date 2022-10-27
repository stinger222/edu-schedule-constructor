import { weekDay } from './interfaces';
import { makeAutoObservable } from 'mobx';

export interface IUIStore {
	selectedDay: weekDay,
	isMenuOpen: boolean,
	selectDay: (day: weekDay) => void,
	toggleMenu: (newState?: boolean) => void
}

class UIStore implements IUIStore {
	selectedDay: weekDay = 'mon'
	isMenuOpen = false

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

	toggleMenu(newState?: boolean) {
		this.isMenuOpen = newState ? newState : !this.isMenuOpen
	}
}

export default UIStore