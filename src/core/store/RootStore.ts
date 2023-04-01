import { LessonsStore } from './LessonsStore'
import { ILessonsStore, IUIStore } from './../types/store';
import UIStore from './UIStore';

class RootStore {
	uiStore: IUIStore
	lessonsStore: ILessonsStore

	constructor() {
		this.uiStore = new UIStore()
		this.lessonsStore = new LessonsStore()
	}
}

export default RootStore