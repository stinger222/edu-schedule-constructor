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
  findById(uid: string): ILesson | undefined
}


export interface IRingsSchedulesStore extends IStoreable {
	ringsSchedules: IRingsSchedule[],
	addSchedule(newRingsSchedule: Omit<IRingsSchedule, "uid">): void,
	removeSchedule(uid: string): boolean,
  findById(uid: string): IRingsSchedule | undefined
}

export interface IComposedSchedulesStore extends IStoreable {
	composedSchedules: IComposedSchedule[],
	addSchedule(newSchedule: Omit<IComposedSchedule, "uid">,  uid?: string): void,
	removeSchedule(uid: string): boolean
}