import { makeAutoObservable } from "mobx"
import { getCurrentWeekDates } from "../utils/dateTimeUtils"
import { formatNumber } from "../utils/stringUtils"
import { IUIStore } from "./../types/store"
import { DropdownMenu, ISettings } from "../types/types"
import { ThemeEnum } from "../types/styled"

class UIStore implements IUIStore {
  storageKey: string = "settings"
  activeDropdownMenu: DropdownMenu = "main"
	selectedDayIndex: number
	isDropdownOpen = false

  defaultSettings: ISettings = {
    theme: ThemeEnum.light
  }

  // will be parsed from ls
  userSettings: ISettings = {
    theme: ThemeEnum.light
  }

	constructor() {
		makeAutoObservable(this)
		this.setupSelectedDayIndex()
    this.restoreState()
	}

  memorizeState() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.userSettings))
  }

  restoreState() {
    //  "{}" || "{lang, theme}"
    const storedSettings = JSON.parse(localStorage.getItem(this.storageKey) || "{}")

    if (Object.keys(storedSettings).length === 0) {
      this.userSettings = this.defaultSettings
      this.memorizeState()
    }

    this.userSettings = storedSettings
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