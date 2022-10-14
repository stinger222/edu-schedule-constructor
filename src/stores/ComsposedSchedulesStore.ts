import { nanoid } from 'nanoid';
import { IComposedSchedule } from './interfaces';
import { makeAutoObservable } from "mobx"

export interface IComsposedSchedulesStore {	
	schedules: IComposedSchedule[],
	addSchedule: (schedule: IComposedSchedule) => void
}

class ComsposedSchedulesStore implements IComsposedSchedulesStore {
	schedules: IComposedSchedule[] = [{
		id: nanoid(6),
		week: [{
			ring_schedule_id: "qwe",
			lesson_ids: ["1", "2"]
		}, 
		{
			ring_schedule_id: "qwe",
			lesson_ids: ["2", "1"]
		}, 
		{
			ring_schedule_id: "qwe",
			lesson_ids: ["1", "2"]
		}, 
		{
			ring_schedule_id: "qwe",
			lesson_ids: ["2", "1"]
		}, 
		{
			ring_schedule_id: "qwe",
			lesson_ids: ["1", "2"]
		},
		{
			ring_schedule_id: "qwe",
			lesson_ids: ["2", "1"]
		}
	]
	}]


	constructor() {
		makeAutoObservable(this)
	}

	addSchedule(schedule) {
		this.schedules.push(schedule)
	}
}

export default ComsposedSchedulesStore