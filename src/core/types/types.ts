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
		start: string,
		end: string
	}>
}

export interface IComposedDay  {
	ringsScheduleId: string,
	lessonIds: string[]
}

export interface IComposedSchedule {
	uid: string,
	name: string,
	days: IComposedDay[]
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
