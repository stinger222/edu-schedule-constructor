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

export const formatTimeString = (timeString: string): string => {
	const [hours, minutes] = timeString.split(":")

	return `${formatNumber(parseInt(hours))}:${formatNumber(parseInt(minutes))}`
}

export const capitalize = (str: string, eachWord: boolean = false): string => {
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