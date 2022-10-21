import { nanoid } from 'nanoid';
import { IComposedSchedule, IComposedWeek } from './interfaces';
import { makeAutoObservable } from "mobx"

export interface IComposedSchedulesStore {	
	schedules: IComposedSchedule[],
	selectedScheduleId: string | null,
	addSchedule: (week: IComposedWeek, id?: string, name?: string) => void,
	selectSchedule: (id: string) => void
}

class ComposedSchedulesStore implements IComposedSchedulesStore {
	selectedScheduleId = "asdasd"
	schedules = [
		{
			id: "asdasd",
			name: "Schdeule №1",
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
					lesson_ids: []
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
	
	addSchedule(week: IComposedWeek, id?: string, name?: string, ) {
		this.schedules.push({
			name: name ?? "Расписание №" + (this.schedules.length + 1),
			id: id ?? nanoid(6),
			week
		})

		console.log(JSON.stringify(this.schedules[this.schedules.length - 1], null, 2));
	}

	selectSchedule(id: string) {
		this.selectedScheduleId = id
	}
}

export default ComposedSchedulesStore