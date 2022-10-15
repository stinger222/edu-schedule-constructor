import ComposedSchedulesStore, { IComposedSchedulesStore } from "./ComposedSchedulesStore";
import UIStore, { IUIStore } from "./UIStore";
import LessonsStore, { ILessonsStore } from "./LessonsStore";
import RingSchedulesStore, { IRingSchedulesStore } from "./RingSchedulesStore";

class RootStore {
		lessonsStore: ILessonsStore
		composedSchedulesStore: IComposedSchedulesStore
		ringSchedulesStore: IRingSchedulesStore
		uiStore: IUIStore

		constructor() {
			this.lessonsStore = new LessonsStore()
			this.composedSchedulesStore = new ComposedSchedulesStore()
			this.ringSchedulesStore = new RingSchedulesStore()
			this.uiStore = new UIStore()
		}
}

export default RootStore