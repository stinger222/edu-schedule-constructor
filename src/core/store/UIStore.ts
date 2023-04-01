import { getCurrentWeekDates, formatNumber } from './../utils/helpers'
import { makeAutoObservable } from 'mobx';
import { IUIStore } from './../types/store';

class UIStore implements IUIStore {
	isDropdownOpen = false
	selectedDayIndex: number

	constructor() {
		makeAutoObservable(this)
		this.initialize()
	}

	private initialize() {
		this.setupSelectedDayIndex()
	}

	private setupSelectedDayIndex() {
		const week = getCurrentWeekDates()
		const todayDate: string = formatNumber(new Date().getDate())
		
		this.selectedDayIndex = week.findIndex(i => i === todayDate)
	}

	selectDayIndex(newIndex: number) {
		this.selectedDayIndex = newIndex
	}

	toggleDropdown(newState?: boolean) {
		this.isDropdownOpen = newState != undefined ? newState : !this.isDropdownOpen
	}
}

export default UIStore