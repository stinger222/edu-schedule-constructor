import { IUIStore } from './../types/store';
import UIStore from './UIStore';

class RootStore {
	uiStore: IUIStore

	constructor() {
		this.uiStore = new UIStore()
	}
}

export default RootStore