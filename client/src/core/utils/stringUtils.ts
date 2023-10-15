import { IClassSchedule } from "../types/types"

export const formatNumbers = (numbers: number[]): string[] => {
	return numbers.map(number => formatNumber(number))
}

export const formatNumber = (number: number, digits: number = 2): string => {
	if (isNaN(number)) return "??"
  
	const formatter = new Intl.NumberFormat("en-US", {
		minimumIntegerDigits: digits,
		useGrouping: true
	})
  
	return formatter.format(Math.abs(number))
}

export const formatTimeString = (rawTimeString: string): string => {
	const [hours, minutes] = rawTimeString.split(":")

	return `${formatNumber(parseInt(hours))}:${formatNumber(parseInt(minutes))}`
}

export const capitalize = (str: string, eachWord: boolean = false): string => {
  str = str.trim()
  
  if (eachWord) {
		return str
			.split(" ")
			.map(s => s.charAt(0).toUpperCase() + s.slice(1))
			.join(" ")
	}
	return str.charAt(0).toUpperCase() + str.slice(1)
}

export const validateField = (value: string) => {
	value = value.trim()
	return value !== "" && value !== "undefined"
}

/**
 * In fact, it formats only `classes` array, to avoid unformatted time strings inside it like "8:5", "9:30" or "12:5" idk 
 */
export const formatClassSchedule = (sch: IClassSchedule) => {
  const formattedClasses = sch.classes.map((cls: {start: string, end: string}) => {
    return {
      start: formatTimeString(cls.start),
      end: formatTimeString(cls.end)
    }
  })

  return {
    ...sch,
    classes: formattedClasses
  } as IClassSchedule
}