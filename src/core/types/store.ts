export interface IUIStore {
	isDropdownOpen: boolean,
	toggleDropdown: (newState?: boolean) => void
}