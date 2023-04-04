import * as icons from '../../assets/icons'

export type weekDates = [string, string, string, string, string, string, string]

export type KeyOfType<T, V> = keyof {
	[S in keyof T as T[S] extends V? S: never]: any
}

export type Replacements<P> = Record<KeyOfType<P, string>, string>

export type PartialField<O, K extends keyof O> = Omit<O, K> & Partial<Pick<O, K>>

export type Icons = keyof typeof icons

export interface IOption {
	label: string,
	id: string
}

export interface ILesson {
	title: string,
	teacher: string,
	cabinet: string,
	uid: string
}

export interface IRingsSchedule {
	name: string,
	uid: string,
	rings: Array<{
		start: `${number}:${number}`,
		end: `${number}:${number}`
	}>
}

export interface IComposedSchedule {
	uid: string,
	days: {
		ringsScheduleId: string,
		lessonIds: string[]
	}[]
}

export enum Cases {
	Nominative = 'nominative',
	Accusative = 'accusative',
}
