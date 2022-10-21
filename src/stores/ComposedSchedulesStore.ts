import { nanoid } from 'nanoid';
import { IComposedSchedule, IComposedDay, IComposedWeek } from './interfaces';
import { makeAutoObservable } from "mobx"

export interface IComposedSchedulesStore {	
	schedules: IComposedSchedule[],
	addSchedule: (week: IComposedWeek, id?: string) => void
}

class ComposedSchedulesStore implements IComposedSchedulesStore {
	schedules: IComposedSchedule[] = [
	{
		id: nanoid(6),
		name: 'Schdeule №2',
		week: {
			mon: {
				ring_schedule_id: "rings1",
				lesson_ids: ["1",]
			},
			tue: {
				ring_schedule_id: "rings1",
				lesson_ids: ["1", "1"]
			},
			wed: {
				ring_schedule_id: "rings1",
				lesson_ids: ["1", "1", "1"]
			},
			thu: {
				ring_schedule_id: "rings1",
				lesson_ids: ["1", "1", "1", "1"]
			},
			fri: {
				ring_schedule_id: "rings1",
				lesson_ids: ["1", "1", "1", "1", "1"]
			},
			sat: {
				ring_schedule_id: "rings1",
				lesson_ids: ["1", "1", "1", "1", "1", "1"]
			}
		}
	}
]

	constructor() {
		makeAutoObservable(this)
	}

	addSchedule(week: IComposedWeek, name: string, id?: string) {
		this.schedules.push({
			name: name ?? "Расписание " + (this.schedules.length + 1),
			id: id ?? nanoid(6),
			week
		})

		console.log(JSON.stringify(this.schedules[this.schedules.length-1], null, 2));
	}
}

export default ComposedSchedulesStore