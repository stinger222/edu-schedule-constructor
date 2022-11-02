import { nanoid } from 'nanoid';
import { IRingSchedule } from './interfaces';
import { makeAutoObservable } from 'mobx';

export interface IRingSchedulesStore {
	schedules: IRingSchedule[],
	addSchedule: (
		name: string,
		rings: Array<{start: string, end: string}>,
		id?: string
	) => void
} 
class RingSchedulesStore implements IRingSchedulesStore {
	schedules: IRingSchedule[] = [{
		id: "rings1",
		name: "Ring 1 Name",
		rings: [{
			start: "8:40",
			end: "10:00"
		},{
			start: "10:10",
			end: "11:30"
		},{
			start: "12:00",
			end: "13:20"
		},{
			start: "13:50",
			end: "14:10"
		},{
			start: "14:40",
			end: "15:10"
		}]
	},{
		id: "rings2",
		name: "Ring 2 Name",
		rings: [{
			start: "8:40",
			end: "10:00"
		},{
			start: "10:10",
			end: "11:30"
		}]
	}]

	constructor() {
		makeAutoObservable(this)
	}

	
	addSchedule( name: string, rings: Array<{start: string, end: string}>, id?: string) {
		this.schedules.push({
			name: name ?? 'Ring Schedule Name',
			id: id ?? nanoid(6),
			rings
		})
	}
}

export default RingSchedulesStore