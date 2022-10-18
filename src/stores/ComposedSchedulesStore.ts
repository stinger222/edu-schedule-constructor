import { nanoid } from 'nanoid';
import { IComposedSchedule, IComposedDay } from './interfaces';
import { makeAutoObservable } from "mobx"

export interface IComposedSchedulesStore {	
	schedules: IComposedSchedule[],
	addSchedule: (week: IComposedDay[], id?: string) => void
}

class ComposedSchedulesStore implements IComposedSchedulesStore {
	schedules: IComposedSchedule[] = [{
		id: nanoid(6),
		week: [{
			ring_schedule_id: "rings1",
			lesson_ids: ["1"]
		}, 
		{
			ring_schedule_id: "rings1",
			lesson_ids: ["1", "1"]
		}, 
		{
			ring_schedule_id: "rings1",
			lesson_ids: ["1", "1", "1"]
		}, 
		{
			ring_schedule_id: "rings1",
			lesson_ids: ["1", "1", "1", "1"]
		}, 
		{
			ring_schedule_id: "rings1",
			lesson_ids: ["1", "1", "1", "1", "1"]
		},
		{
			ring_schedule_id: "rings2",
			lesson_ids: ["1", "1", "1", "1", "1", "1"]
		}
	]
	}]

	constructor() {
		makeAutoObservable(this)
	}

	addSchedule(week: IComposedDay[], id?: string) {
		this.schedules.push({
			id: id ?? nanoid(6),
			week
		})

		console.log(JSON.stringify(this.schedules[this.schedules.length-1], null, 2));
	}
}

export default ComposedSchedulesStore