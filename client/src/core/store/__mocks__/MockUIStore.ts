import { makeAutoObservable } from "mobx"
import { IUIStore } from "../../types/store"
import { ThemeEnum } from "../../types/styled"
import { ISettings } from "../../types/types"


class MockUIStore implements IUIStore {
  storageKey: "mock-settings"
  activeDropdownMenu: "main"
  selectedDayIndex: 1
  isDropdownOpen: false

  defaultSettings: ISettings = {
    theme: ThemeEnum.light
  }

  userSettings: ISettings = {
    theme: ThemeEnum.light
  }

	constructor() {
		makeAutoObservable(this)
	}

  memorizeState = vi.fn()
  restoreState = vi.fn()
  setupSelectedDayIndex = vi.fn()
  selectDayIndex = vi.fn()
  toggleDropdown = vi.fn()
  setTheme = vi.fn()
}

export default MockUIStore