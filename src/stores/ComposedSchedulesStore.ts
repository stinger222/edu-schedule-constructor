import { nanoid } from 'nanoid';
import { IComposedSchedule } from './interfaces';
import { makeAutoObservable } from "mobx"

export interface IComposedSchedulesStore {	
	schedules: IComposedSchedule[],
	addSchedule: (schedule: IComposedSchedule) => void
}

class ComposedSchedulesStore implements IComposedSchedulesStore {
	schedules: IComposedSchedule[] = [{
		id: nanoid(6),
		week: [{
			ring_schedule_id: "rings1",
			lesson_ids: ["1", "2", "1", "2"]
		}, 
		{
			ring_schedule_id: "rings1",
			lesson_ids: ["1", "2", "3"]
		}, 
		{
			ring_schedule_id: "rings1",
			lesson_ids: ["1", "2"]
		}, 
		{
			ring_schedule_id: "rings1",
			lesson_ids: ["2", "1"]
		}, 
		{
			ring_schedule_id: "rings1",
			lesson_ids: ["1", "2"]
		},
		{
			ring_schedule_id: "rings2",
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

export default ComposedSchedulesStore