import { Cases, weekDates } from "../types/types"
import { formatNumber } from "./stringUtils"

export class WeekDays {
	private static readonly _week = {
		short: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
		full: {
			nominative: [
				"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
			],
			accusative: [
				"Понедельник", "Вторник", "Среду", "Четверг", "Пятницу", "Субботу", "Воскресенье"
			]
		}
	}

	static getShort(): ReadonlyArray<string> {
		return this._week.short as ReadonlyArray<string>
	}

	static getFull(caseType: Cases = Cases.Nominative, toLowerCase: boolean = false): ReadonlyArray<string> {
		const result: ReadonlyArray<string> = this._week.full[caseType]
		return toLowerCase ? result.map(i => i.toLowerCase()) : result
	}
}



export const getCurrentWeekDates = (): weekDates => {
	const date = new Date()
	date.setDate(date.getDate() - (date.getDay() === 0 ? 7 : date.getDay())) // now it's current week sunday date:

	const result = Array.from({ length: 7 }, () => {
		date.setDate(date.getDate() + 1) // and now it's monday
		return formatNumber(date.getDate())
	})

	return result as weekDates
}
