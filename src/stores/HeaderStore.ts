import { makeAutoObservable } from 'mobx';

export interface IHeaderStore {
	selectedDayId: number
	selectDay: (id: number) => void
}

class HeaderStore implements IHeaderStore {
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

export default HeaderStore