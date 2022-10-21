// Ring schedule
export interface IRingSchedule {
	id: string,
	rings: Array<{
		start: string,
		end: string
	}>
}

// Lesson card
export interface ILesson {
	id: string,
	cabinet: string,
	teacher: string,
	lesson_name: string,
}

// Composedschedule
export interface IComposedDay {
	ring_schedule_id: string,
	lesson_ids: string[]
}

export interface IComposedWeek {
	mon: IComposedDay,
	tue: IComposedDay,
	wed: IComposedDay,
	thu: IComposedDay,
	fri: IComposedDay,
	sat: IComposedDay,
}

export interface IComposedSchedule {
	id: string,
	name: string,
	week: IComposedWeek
}

// Other
export interface CustomError extends Error {
	type?: 'error' | 'warning' | 'message'
}

export type weekDay = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'