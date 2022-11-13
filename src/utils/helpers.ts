/**
 * Trims & capitalizes values from the form
 * 
 * @param values Object with string values
 * @returns Same object with normalized values
 */


export const normalizeValues = <T>(values) => {
	const result = {} as T
	
	for (const key in values) {
		let value: string = values[key]
		value = value.trim()
		value = value.charAt(0).toUpperCase() + value.slice(1)
		result[key] = value
	}
	return result
}


export const randInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}