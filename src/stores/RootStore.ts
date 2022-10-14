import ComsposedSchedulesStore, { IComsposedSchedulesStore } from "./ComsposedSchedulesStore";
import HeaderStore, { IHeaderStore } from "./HeaderStore";
import LessonsStore, { ILessonsStore } from "./LessonsStore";
import RingSchedulesStore, { IRingSchedulesStore } from "./RingSchedulesStore";

class RootStore {
		lessonsStore: ILessonsStore
		comsposedSchedulesStore: IComsposedSchedulesStore
		ringSchedulesStore: IRingSchedulesStore
		headerStore: IHeaderStore

		constructor() {
			this.lessonsStore = new LessonsStore()
			this.comsposedSchedulesStore = new ComsposedSchedulesStore()
			this.ringSchedulesStore = new RingSchedulesStore()
			this.headerStore = new HeaderStore()
		}
}

export default RootStore