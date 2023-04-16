import { ILesson, IRingsSchedule, IComposedSchedule } from "./types"
export interface IUIStore {
	selectedDayIndex: number,
	isDropdownOpen: boolean,
	toggleDropdown: (newState?: boolean) => void,
	selectDayIndex: (newIndex: number) => void
}

interface IStoreable {
	storageKey: string

	memorizeState(): void
	restoreState(): void
}

export interface ILessonsStore extends IStoreable {
	_lessons: ILesson[],
	lessons: ILesson[],
	addLesson(newLesson: Omit<ILesson, "uid">): void,
	removeLesson(uid: string): boolean,
	updateLesson(uid: string, newLesson: Omit<ILesson, "uid">): void
	restoreState(): void
}


export interface IRingsSchedulesStore {
	ringsSchedules: IRingsSchedule[],
	addSchedule(newRingsSchedule: Omit<IRingsSchedule, "uid">): void,
	removeSchedule(uid: string): boolean
}

export interface IComposedSchedulesStore {
	composedSchedules: IComposedSchedule[],
	addSchedule(newSchedule: Omit<IComposedSchedule, "uid">): void,
	removeSchedule(uid: string): boolean
}