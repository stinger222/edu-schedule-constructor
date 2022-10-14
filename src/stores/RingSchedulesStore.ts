import { nanoid } from 'nanoid';
import { IRingSchedule } from './interfaces';
import { makeAutoObservable } from 'mobx';

export interface IRingSchedulesStore {
	schedules: IRingSchedule[]
} 
class RingSchedulesStore implements IRingSchedulesStore {
	schedules: IRingSchedule[] = [{
		id: "qwe",
		lessons: [{
			start: "8:40",
			end: "10:00"
		},{
			start: "10:10",
			end: "11:30"
		},{
			start: "12:00",
			end: "13:20"
		}]
	}]

	constructor() {
		makeAutoObservable(this)
	}
}

export default RingSchedulesStore