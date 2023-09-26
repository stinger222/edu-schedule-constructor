import { Cases, weekDates } from "../types/types"
import { formatNumber } from "./stringUtils"


interface IData {
  ru: {
    short: readonly string[],
    full: {
      nominative: readonly string[],
      accusative: readonly string[]
    }
  },
  en: {
    short: readonly string[],
    full: {
      nominative: readonly string[],
      accusative: readonly string[]
    }
  }
}
export class WeekUtils {

  private static readonly data: IData = {
    ru: {
      short: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      full: {
        nominative: [
          "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"
        ],
        accusative: [
          "Понедельник", "Вторник", "Среду", "Четверг", "Пятницу", "Субботу", "Воскресенье"
        ]
      }
    },
    en: {
      short: ["M", "T", "W", "T", "F", "S", "S"],
      full: {
        nominative: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        accusative: [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ]
      }
    }
  }

	static getShort(lang: "ru" | "en"): ReadonlyArray<string> {
		return this.data[lang].short as ReadonlyArray<string>
	}

	static getFull(lang: "ru" | "en", caseType: Cases = Cases.Nominative, toLowerCase: boolean = false): ReadonlyArray<string> {
		const result: ReadonlyArray<string> = this.data[lang].full[caseType]
		return toLowerCase ? result.map(i => i.toLowerCase()) : result
	}
}

/**
 * @returns An array of 7 formatted readonly strings, that represent dates of each day in current week 
 */
export const getCurrentWeekDates = (): weekDates => {
	const date = new Date()
	date.setDate(date.getDate() - (date.getDay() === 0 ? 7 : date.getDay())) // now it's current week sunday date:

	const result = Array.from({ length: 7 }, () => {
		date.setDate(date.getDate() + 1) // and now it's monday
		return formatNumber(date.getDate())
	})

	return result as weekDates
}

  /**
   * @param timeString string consisting of 2 numbers, divided by colon (:)
   * @returns Date object with time and hours set to values from the passed string
   */
  export const parseTimeStringToDate = (timeString: string): Date => {
    const splitted = timeString.split(":")

    const date = new Date()
    date.setHours(+splitted[0])
    date.setMinutes(+splitted[1])

    return date
  }

  /**
   * This function checks if the `targetDate` is withing a given date range
   * 
   * @param targetDate 
   * @param rangeStartDate Lower range boundary
   * @param rangeEndDate Upper range boundary
   */
  export const isDateInRange = (targetDate: Date, rangeStartDate: Date, rangeEndDate: Date): boolean => {
    return (targetDate.getTime() >= rangeStartDate.getTime())  && (targetDate.getTime() <= rangeEndDate.getTime())
  }