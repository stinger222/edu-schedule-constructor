import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"

import { capitalize, formatClassSchedule } from "../utils/stringUtils"
import { IClassSchedulesStore } from "../types/store"
import { IClassSchedule } from "../types/types"
import { api } from "../../api"

class ClassSchedulesStore implements IClassSchedulesStore {
	_classSchedules: IClassSchedule[] = []
	static storageKey: string = "class-schedules"

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

	memorizeState() {
		// localStorage.setItem(ClassSchedulesStore.storageKey, JSON.stringify(this.classSchedules))
	}

	async restoreState() {
    try {
      const response = await api.get("users/me/class-schedules").json() as { classSchedules: IClassSchedule[] }
      
      console.log("Fetched classSchedules: ", response.classSchedules)

      this.classSchedules = response.classSchedules

      
    } catch(err) {
      console.error("Can't fetch class schedules:\n", err.message)
      this.classSchedules = []
    }
	}
	// restoreState(): void {
  //   try {
  //     this.classSchedules = JSON.parse(localStorage.getItem(ClassSchedulesStore.storageKey) || `[]`)
  //   } catch(err) {
  //     console.error(`Fatal error occurred. Can't parse "${ClassSchedulesStore.storageKey}" from local storage, so it's value will be cleared.`)
  //     console.error(err.message)
      
  //     this.classSchedules = []
  //     this.memorizeState()
  //   }
	// }

	async addSchedule(newClassSchedule: Omit<IClassSchedule, "uid">, uid?: string) {
    try {
      const newFormatterClassSchedule = {
        ...newClassSchedule,
        name: capitalize(newClassSchedule.name) || `Class Schedule №${this.classSchedules.length+1}`, 
        uid: uid || nanoid(10)
      }

      const response = await api.post("users/me/class-schedules", {
        json: newFormatterClassSchedule
      }).json() as { classSchedules: IClassSchedule[] }

      this.classSchedules = response.classSchedules
    } catch (err) {
      console.error("Can't add new class schedule:\n", err.message)
    }
	}

	// addSchedule(newClassSchedule: Omit<IClassSchedule, "uid">, uid?: string): void {
	// 	this.classSchedules.push({
  //     ...newClassSchedule,
  //     name: capitalize(newClassSchedule.name) || `Class Schedule №${this.classSchedules.length+1}`, 
  //     uid: uid || nanoid(10)
  //   })

	// 	this.memorizeState()
	// }

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
      const response = await api
        .put(`users/me/class-schedules/${uid}`, {
          json: {
            ...updatedSchedule
          }  
        })
        .json() as { classSchedules: IClassSchedule[] }
        
      this.classSchedules = response.classSchedules
    } catch (err) {
      console.error(`Can't update class schedule with id "${uid}":\n`,  err.message)
    }
	}

  // updateSchedule(uid: string, newSchedule: Partial<Omit<IClassSchedule, "uid">>) {
	// 	const indexToUpdate = this.classSchedules.findIndex(s => s.uid === uid)

	// 	if (indexToUpdate === -1) {
	// 		console.warn(`Can't upsdate.\nSchedule with id "${uid}" not found.`)
	// 		return false
	// 	}

	// 	this.classSchedules[indexToUpdate] = {
	// 		...this.classSchedules[indexToUpdate],
	// 		...newSchedule
	// 	}
    
  //   this.memorizeState()
	// 	console.log("Schedule updated successfully.")
	// }

	async removeSchedule(uid: string) {
    try {
      const response = await api
        .delete(`users/me/class-schedules/${uid}`)
        .json() as { classSchedules: IClassSchedule[] }

        this.classSchedules = response.classSchedules
        console.log(`Class schedule with id "${uid}" was successfully deleted!`)
    } catch (err) {
      console.error(`Can't delete class schedule with id "${uid}":\n`, err.message)
    }
	}

	// removeSchedule(uid: string): boolean {
	// 	const indexToDelete = this.classSchedules.findIndex(schedule => schedule.uid === uid)
	// 	if (indexToDelete === -1) {
	// 		console.warn(`Class schedule with id "${uid}" not found.`)
	// 		return false
	// 	}

	// 	const deletedSchedule = this.classSchedules.splice(indexToDelete, 1)

	// 	this.memorizeState()
	// 	console.log("Schedule deleted from store.", toJS(deletedSchedule[0]))
    
	// 	return deletedSchedule.length === 1 
	// }

  getById(uid: string): IClassSchedule | undefined {
    return this.classSchedules.find(s => s.uid === uid)
  }
}

export default ClassSchedulesStore