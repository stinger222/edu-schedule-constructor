import * as icons from "../../assets/icons"
import { ThemeEnum } from "./styled"

export type weekDates = [string, string, string, string, string, string, string]

export type KeyOfType<T, V> = keyof {
	[S in keyof T as T[S] extends V? S: never]: any
}

export type PartialField<O, K extends keyof O> = Omit<O, K> & Partial<Pick<O, K>>

export type Icons = keyof typeof icons
export interface IOption {
	label: string,
	id: string
}
export interface IClass {
	title: string,
	teacher: string,
	cabinet: string,
	uid: string
}

export interface IClassSchedule {
	name: string,
	uid: string,
	classes: Array<{
		start: string,
		end: string
	}>
}

export interface IAssembledDay  {
	classScheduleId: string,
	classIds: string[]
}

export interface IAssembledSchedule {
	uid: string,
	name: string,
	days: IAssembledDay[]
}

export enum Cases {
	Nominative = "nominative",
	Accusative = "accusative",
}

export interface IActionLabelProps {
  className?: string
}

export interface ISettings {
  theme: ThemeEnum
}

export type DropdownMenu = "main" | "settings"

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>