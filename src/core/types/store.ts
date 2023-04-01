import { ILesson } from './types'
export interface IUIStore {
	selectedDayIndex: number,
	isDropdownOpen: boolean,
	toggleDropdown: (newState?: boolean) => void
	selectDayIndex: (newIndex: number) => void
}

export interface ILessonsStore {
	lessons: ILesson[],
	addLesson(newLesson: Omit<ILesson, 'uid'>): void,
	removeLesson(uid: string): boolean,
	updateLesson(uid: string, newLesson: Omit<ILesson, 'uid'>): void
}
