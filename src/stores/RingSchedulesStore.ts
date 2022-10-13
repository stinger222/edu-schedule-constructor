import { IRingSchedule } from './interfaces';
import { makeAutoObservable } from 'mobx';

class RingSchedulesStore {
	schedules: IRingSchedule[] = []

	constructor() {
		makeAutoObservable(this)
	}
}

export default RingSchedulesStore