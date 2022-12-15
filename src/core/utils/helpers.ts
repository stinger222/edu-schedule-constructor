import { weekDates } from './../types/types';

export const getCurrentWeekDates = (): weekDates => {
	const result = []
	const date = new Date()
	date.setDate(date.getDate() - (date.getDay() === 0 ? 7 : date.getDay())) // now it's current week sunday date
	for (let i = 0; i < 7; i++) {
		date.setDate(date.getDate() + 1) // now it's monday
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