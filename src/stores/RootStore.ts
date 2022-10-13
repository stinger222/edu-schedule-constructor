import ComsposedSchedulesStore from "./ComsposedSchedulesStore";
import LessonsStore from "./LessonsStore";
import RingSchedulesStore from "./RingSchedulesStore";

class RootStore {
		lessonsStore: any
		comsposedSchedulesStore: any
		ringSchedulesStore: any

		constructor() {
			this.lessonsStore = new LessonsStore()
			this.comsposedSchedulesStore = new ComsposedSchedulesStore()
			this.ringSchedulesStore = new RingSchedulesStore()
		}
}

export default RootStore