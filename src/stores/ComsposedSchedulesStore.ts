import { IComposedSchedule } from './interfaces';
import { makeAutoObservable } from "mobx"

class ComsposedSchedulesStore {
	schedules: IComposedSchedule[] = []

	constructor() {
		makeAutoObservable(this)
	}
}

export default ComsposedSchedulesStore