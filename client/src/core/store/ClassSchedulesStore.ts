import { AxiosResponse } from "axios"
import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"

import { capitalize, formatTimeString } from "../utils/stringUtils"
import { IClassSchedulesStore } from "../types/store"
import { IClassSchedule } from "../types/types"
import { api } from "../../api"

class ClassSchedulesStore implements IClassSchedulesStore {
	_classSchedules: IClassSchedule[] = []
  isLoading: boolean = true

	constructor() {
		this.restoreState()
		makeAutoObservable(this)
	}

  set classSchedules(classSchedules1: IClassSchedule[]) {
    this._classSchedules = classSchedules1.map((sch: IClassSchedule) => {
      return ClassSchedulesStore.formatClassScheduleObject(sch)
    })
  }

  get classSchedules() {
    return this._classSchedules
  }

	restoreState() {

    this.isLoading = true
    api
      .get("users/me/class-schedules")
      .then((response: AxiosResponse<{classSchedules: IClassSchedule[]}>) => {
        this.classSchedules = response.data.classSchedules
        console.log("Fetched classSchedules: ", response.data.classSchedules)
      })
      .catch(err => {
        console.error("Can't fetch class schedules:\n", err.message)
        this.classSchedules = []
      })
      .finally(() => {
        this.isLoading = false
      })
	}

	addSchedule(newClassSchedule: Omit<IClassSchedule, "uid">, uid?: string) {

    const newFormatterSchedule = {
      ...newClassSchedule,
      name: capitalize(newClassSchedule.name) || `Class Schedule №${this.classSchedules.length+1}`, 
      uid: uid || nanoid(10)
    }
    
    this.isLoading = true
    api
      .post("users/me/class-schedules", newFormatterSchedule)
      .then((response: AxiosResponse<{classSchedules: IClassSchedule[]}>) => {
        this.classSchedules = response.data.classSchedules
        console.log("Class schedule added successfully")
      })
      .catch(err => {
        console.error("Can't add new class schedule:\n", err.message)
      })
      .finally(() => {
        this.isLoading = false
      })
	}

  updateSchedule(uid: string, updatedFields: Partial<Omit<IClassSchedule, "uid">>) {
		const indexToUpdate = this.classSchedules.findIndex(s => s.uid === uid)

		if (indexToUpdate === -1) {
			console.warn(`Can't update.\nSchedule with id "${uid}" not found.`)
			return false
		}

		const updatedSchedule = {
			...this.classSchedules[indexToUpdate],
			...updatedFields
		}

    this.isLoading = true
    api
      .put(`users/me/class-schedules/${uid}`, updatedSchedule)
      .then((response: AxiosResponse<{classSchedules: IClassSchedule[]}>) => {
        this.classSchedules = response.data.classSchedules
        console.log("Class schedule modified successfully")    
      })
      .catch(err => {
        console.error(`Can't update class schedule with id "${uid}":\n`,  err.message)
      })
      .finally(() => {
        this.isLoading = false
      })
	}

	removeSchedule(uid: string) {
    this.isLoading = true
    api
      .delete(`users/me/class-schedules/${uid}`)
      .then((response: AxiosResponse<{classSchedules: IClassSchedule[]}>) => {
        this.classSchedules = response.data.classSchedules
        console.log(`Class schedule deleted successfully`)
      })
      .catch(err => {
        console.error(`Can't delete class schedule with id "${uid}":\n`, err.message)
      })
      .finally(() => {
        this.isLoading = false
      })
  }

  getById(uid: string): IClassSchedule | undefined {
    return this.classSchedules.find(s => s.uid === uid)
  }
  
  static formatClassScheduleObject(scheduleToFormat: IClassSchedule) {
    const formattedClasses = scheduleToFormat.classes.map((cls: {start: string, end: string}) => {
      return {
        start: formatTimeString(cls.start),
        end: formatTimeString(cls.end)
      }
    })
  
    return {
      ...scheduleToFormat,
      classes: formattedClasses,
      name: capitalize(scheduleToFormat.name).trim()
    } as IClassSchedule
  }
}

export default ClassSchedulesStore
