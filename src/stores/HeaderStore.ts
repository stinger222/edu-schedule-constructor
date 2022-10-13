import { makeAutoObservable } from 'mobx';

class HeaderStore {
	selectedDayId: number

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