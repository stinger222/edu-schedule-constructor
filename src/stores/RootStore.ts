import ComsposedSchedulesStore from "./ComsposedSchedulesStore";
import HeaderStore from "./HeaderStore";
import LessonsStore from "./LessonsStore";
import RingSchedulesStore from "./RingSchedulesStore";

class RootStore {
		lessonsStore: any
		comsposedSchedulesStore: any
		ringSchedulesStore: any
		headerStore: any

		constructor() {
			this.lessonsStore = new LessonsStore()
			this.comsposedSchedulesStore = new ComsposedSchedulesStore()
			this.ringSchedulesStore = new RingSchedulesStore()
			this.headerStore = new HeaderStore()
		}
}

export default RootStore