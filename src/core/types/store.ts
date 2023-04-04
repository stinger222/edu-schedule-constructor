import { ILesson, IRingsSchedule, IComposedSchedule } from './types'
export interface IUIStore {
	selectedDayIndex: number,
	isDropdownOpen: boolean,
	toggleDropdown: (newState?: boolean) => void,
	selectDayIndex: (newIndex: number) => void
}

export interface ILessonsStore {
	lessons: ILesson[],
	addLesson(newLesson: Omit<ILesson, 'uid'>): void,
	removeLesson(uid: string): boolean,
	updateLesson(uid: string, newLesson: Omit<ILesson, 'uid'>): void
}


export interface IRingsSchedulesStore {
	ringsSchedules: IRingsSchedule[],
	addRingsSchedule(newRingsSchedule: Omit<IRingsSchedule, 'uid'>): void,
	removeSchedule(uid: string): boolean
}

export interface IComposedSchedulesStore {
	composedSchedules: IComposedSchedule[],
	addSchedule(newSchedule: Omit<IComposedSchedule, 'uid'>): void,
	removeSchedule(uid: string): boolean
}