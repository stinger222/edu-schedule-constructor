import { makeAutoObservable } from 'mobx';

export interface IUIStore {
	selectedDayId: number
	selectDay: (id: number) => void
}

class UIStore implements IUIStore {
	selectedDayId = 1

	constructor() {
		makeAutoObservable(this)
		this.selectedDayId = this.getTodayId()
	}

	private getTodayId(): number {
		return new Date().getDay()
	}

	selectDay = (id: number) => {
		this.selectedDayId = id
	}
}

export default UIStore