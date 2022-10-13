// Ring schedule

export interface IRingSchedule {
	id: string,
	lessons: Array<{
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



// Composed schedule

interface IComposedDay {
	ring_schedule_id: string,
	lesson_ids: string[]
}

export interface IComposedSchedule {
	id: string,
	monday: IComposedDay,
	tuesday: IComposedDay,
	wensday: IComposedDay,
	thursdsy: IComposedDay,
	friday: IComposedDay,
	saturday?: IComposedDay
}