import { weekDates, Replacements, Cases } from './../types/types';

export const getCurrentWeekDates = (): weekDates => {
	const result = []
	const date = new Date()
	date.setDate(date.getDate() - (date.getDay() === 0 ? 7 : date.getDay())) // now it's current week sunday date
	for (let i = 0; i < 7; i++) {
		date.setDate(date.getDate() + 1) // and now it's monday
		result.push(date.getDate())
	}

	return formatNumbers(result) as weekDates
}

export const formatNumbers = (numbers: number[]): string[] => {
	return numbers.map(number => formatNumber(number))
}

export function replaceBlankProps<P extends {[key: string]: any}> (props: P , replacements: Replacements<P>): P {
	const result: any = {}
	for (const [key, value] of Object.entries(props)) {
		if (typeof value === 'string') {
			if (value.trim() == '') {
				result[key] = replacements[key as keyof typeof replacements]
			} else {
				result[key] = value
			}
		} else {
			result[key] = value
		}
	}
	return result as P
}

export const formatNumber = (number: number): string => {
	if (isNaN(number)) return "??"
	
	return Math.abs(number).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
}

export const formatTimeString = (timeString: string): string => {
	let [hours, minutes] = timeString.split(':')

	return `${formatNumber(parseInt(hours))}:${formatNumber(parseInt(minutes))}`
}

export class WeekDays {
	private static _week = {
		short: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
		full: {
			nominative: [
				'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
			],
			accusative: [
				'Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Субботу', 'Воскресенье'
			]
		} as Record<Cases, string[]>
	}

	static getShort() {
		return this._week.short
	}

	static getFull(_case: Cases = Cases.Nominative, lowerCase: boolean = false) {
		let result = this._week.full[_case]
		return lowerCase ? result.map(i => i.toLowerCase()) : result
	}
}