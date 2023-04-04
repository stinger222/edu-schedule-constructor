import { IComposedSchedulesStore, ILessonsStore, IRingsSchedulesStore, IUIStore } from './../types/store';
import ComposedSchedulesStore from './ComposedSchedulesStore'
import RingsSchedulesStore from './RingsSchedulesStore'
import LessonsStore from './LessonsStore'
import UIStore from './UIStore';

class RootStore {
	uiStore: IUIStore
	lessonsStore: ILessonsStore
	ringsSchedulesStore: IRingsSchedulesStore
	composedSchedulesStore: IComposedSchedulesStore

	constructor() {
		this.uiStore = new UIStore()
		this.lessonsStore = new LessonsStore()
		this.ringsSchedulesStore = new RingsSchedulesStore()
		this.composedSchedulesStore = new ComposedSchedulesStore()
	}
}

export default RootStore