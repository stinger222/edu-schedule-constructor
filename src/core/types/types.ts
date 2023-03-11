import * as icons from '../../assets/icons'

export type weekDates = [string, string, string, string, string, string, string]

export type KeyOfType<T, V> = keyof {
	[S in keyof T as T[S] extends V? S: never]: any
}

export type Replacements<P> = Record<KeyOfType<P, string>, string>

export type Icons = keyof typeof icons

export interface IOption {
	label: string,
	id: string
}

export enum Cases {
	Nominative = 'nominative',
	Accusative = 'accusative',
}