import { RingsSchedulesStore } from './RingsSchedulesStore'
import { LessonsStore } from './LessonsStore'
import { ILessonsStore, IUIStore } from './../types/store';
import UIStore from './UIStore';

class RootStore {
	uiStore: IUIStore
	lessonsStore: ILessonsStore
	ringsScheduleStore: any

	constructor() {
		this.uiStore = new UIStore()
		this.lessonsStore = new LessonsStore()
		this.ringsScheduleStore = new RingsSchedulesStore()
	}
}

export default RootStore