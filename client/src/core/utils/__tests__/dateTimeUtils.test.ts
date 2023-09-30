import { Cases } from "../../types/types"
import { WeekUtils } from "./../dateTimeUtils"


describe("Testing WeekUtils class", () => {	
	it("Testing WeekUtils.getShort() method", () => {  
    expect(WeekUtils.getShort("en")).toEqual( ["M", "T", "W", "T", "F", "S", "S"])
    expect(WeekUtils.getShort("ru")).toEqual(["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"])
    
    expect(WeekUtils.getFull("en", undefined, false)).toEqual(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
    expect(WeekUtils.getFull("en", undefined, true)).toEqual(["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"])
    expect(WeekUtils.getFull("en", undefined)).toEqual(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
    expect(WeekUtils.getFull("en")).toEqual(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"])
    
    expect(WeekUtils.getFull("ru", undefined, false)).toEqual(["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"])
    expect(WeekUtils.getFull("ru", undefined, true)).toEqual(["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"])
    expect(WeekUtils.getFull("ru", undefined)).toEqual(["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"])
    expect(WeekUtils.getFull("ru", Cases.Nominative, false)).toEqual(["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"])
    expect(WeekUtils.getFull("ru", Cases.Nominative, true)).toEqual(["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"])
    expect(WeekUtils.getFull("ru", Cases.Nominative)).toEqual(["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"])
    expect(WeekUtils.getFull("ru", Cases.Accusative, false)).toEqual(["Понедельник", "Вторник", "Среду", "Четверг", "Пятницу", "Субботу", "Воскресенье"])
    expect(WeekUtils.getFull("ru", Cases.Accusative, true)).toEqual(["понедельник", "вторник", "среду", "четверг", "пятницу", "субботу", "воскресенье"])
    expect(WeekUtils.getFull("ru", Cases.Accusative)).toEqual(["Понедельник", "Вторник", "Среду", "Четверг", "Пятницу", "Субботу", "Воскресенье"])
    expect(WeekUtils.getFull("ru")).toEqual(["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"])
    
  })
})