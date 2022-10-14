import ComsposedSchedulesStore, { IComsposedSchedulesStore } from "./ComsposedSchedulesStore";
import UIStore, { IUIStore } from "./UIStore";
import LessonsStore, { ILessonsStore } from "./LessonsStore";
import RingSchedulesStore, { IRingSchedulesStore } from "./RingSchedulesStore";

class RootStore {
		lessonsStore: ILessonsStore
		comsposedSchedulesStore: IComsposedSchedulesStore
		ringSchedulesStore: IRingSchedulesStore
		uiStore: IUIStore

		constructor() {
			this.lessonsStore = new LessonsStore()
			this.comsposedSchedulesStore = new ComsposedSchedulesStore()
			this.ringSchedulesStore = new RingSchedulesStore()
			this.uiStore = new UIStore()
		}
}

export default RootStore