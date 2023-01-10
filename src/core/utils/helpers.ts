import { weekDates, Replacements } from './../types/types';

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
	return numbers.map(number => {
		return number.toLocaleString('en-US', {
			minimumIntegerDigits: 2,
			useGrouping: false
		})
	})
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
	
	return number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  })
}

export const formatTimeString = (timeString: string): string => {
	let [hours, minutes] = timeString.split(':')

	return `${formatNumber(parseInt(hours))}:${formatNumber(parseInt(minutes))}`
}