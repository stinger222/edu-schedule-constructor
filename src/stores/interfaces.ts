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

export interface IComposedSchedule {
	id: string,
	name: string,
	week: IComposedDay[] // index represents day of the week (0 = Monday)
}

// Other
export interface CustomError extends Error {
	type?: 'error' | 'warning' | 'message'
}