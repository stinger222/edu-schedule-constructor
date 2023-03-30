import { weekDates, Replacements, Cases } from './../types/types'

export const getCurrentWeekDates = (): weekDates => {
  const date = new Date()
  date.setDate(date.getDate() - (date.getDay() === 0 ? 7 : date.getDay())) // now it's current week sunday date:

  const result = Array.from({ length: 7 }, () => {
    date.setDate(date.getDate() + 1) // and now it's monday
    return formatNumber(date.getDate())
  })

  return result as weekDates
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

 export const formatNumber = (number: number, digits: number = 2): string => {
	if (isNaN(number)) return '??'
  
  const formatter = new Intl.NumberFormat('en-US', {
    minimumIntegerDigits: digits,
    useGrouping: true
  })
  
  return formatter.format(Math.abs(number))
}

export const formatTimeString = (timeString: string): string => {
	const [hours, minutes] = timeString.split(':')

	return `${formatNumber(parseInt(hours))}:${formatNumber(parseInt(minutes))}`
}

export class WeekDays {
	private static readonly _week = {
		short: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
		full: {
			nominative: [
				'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'
			],
			accusative: [
				'Понедельник', 'Вторник', 'Среду', 'Четверг', 'Пятницу', 'Субботу', 'Воскресенье'
			]
		}
	}

	static getShort(): ReadonlyArray<string> {
		return this._week.short as ReadonlyArray<string>
	}

	static getFull(caseType: Cases = Cases.Nominative, toLowerCase: boolean = false): ReadonlyArray<string> {
		let result: ReadonlyArray<string> = this._week.full[caseType]
		return toLowerCase ? result.map(i => i.toLowerCase()) : result
	}
}