import { makeAutoObservable } from 'mobx';
import { IUIStore } from './../types/store';

class UIStore implements IUIStore {
	isDropdownOpen = false;

	constructor() {
		makeAutoObservable(this)
	}

	toggleDropdown(newState?: boolean) {
		this.isDropdownOpen = newState ? newState : !this.isDropdownOpen
	}
}

export default UIStore