import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"

import { capitalize, formatClassSchedule } from "../utils/stringUtils"
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
    this._classSchedules = classSchedules1.map((sch: IClassSchedule) => formatClassSchedule(sch))
  }

  get classSchedules() {
    return this._classSchedules
  }

	async restoreState() {
    try {
      this.isLoading = true
      const response = await api.get("users/me/class-schedules").json() as { classSchedules: IClassSchedule[] }
      
      this.classSchedules = response.classSchedules
      console.log("Fetched classSchedules: ", response.classSchedules)
    } catch(err) {
      console.error("Can't fetch class schedules:\n", err.message)
      this.classSchedules = []
    } finally {
      this.isLoading = false
    }
	}

	async addSchedule(newClassSchedule: Omit<IClassSchedule, "uid">, uid?: string) {
    try {
      const newFormatterSchedule = {
        ...newClassSchedule,
        name: capitalize(newClassSchedule.name) || `Class Schedule №${this.classSchedules.length+1}`, 
        uid: uid || nanoid(10)
      }
      
      this.isLoading = true
      const response = await api.post("users/me/class-schedules", {
        json: newFormatterSchedule
      }).json() as { classSchedules: IClassSchedule[] }

      this.classSchedules = response.classSchedules
      console.log("Class schedule added successfully")
    } catch (err) {
      console.error("Can't add new class schedule:\n", err.message)
    } finally {
      this.isLoading = false
    }
	}

  async updateSchedule(uid: string, updatedFields: Partial<Omit<IClassSchedule, "uid">>) {
		const indexToUpdate = this.classSchedules.findIndex(s => s.uid === uid)

		if (indexToUpdate === -1) {
			console.warn(`Can't update.\nSchedule with id "${uid}" not found.`)
			return false
		}

		const updatedSchedule = {
			...this.classSchedules[indexToUpdate],
			...updatedFields
		}
    
    try {
      this.isLoading = true
      const response = await api
        .put(`users/me/class-schedules/${uid}`, {
          json: {
            ...updatedSchedule
          }  
        })
        .json() as { classSchedules: IClassSchedule[] }
        
      this.classSchedules = response.classSchedules
      console.log("Class schedule modified successfully")
    } catch (err) {
      console.error(`Can't update class schedule with id "${uid}":\n`,  err.message)
    } finally {
      this.isLoading = false
    }
	}

	async removeSchedule(uid: string) {
    try {
      this.isLoading = true
      const response = await api
        .delete(`users/me/class-schedules/${uid}`)
        .json() as { classSchedules: IClassSchedule[] }

        this.classSchedules = response.classSchedules
        console.log(`Class schedule deleted successfully`)
    } catch (err) {
      console.error(`Can't delete class schedule with id "${uid}":\n`, err.message)
    } finally {
      this.isLoading = false
    }
	}

  getById(uid: string): IClassSchedule | undefined {
    return this.classSchedules.find(s => s.uid === uid)
  }
}

export default ClassSchedulesStore
