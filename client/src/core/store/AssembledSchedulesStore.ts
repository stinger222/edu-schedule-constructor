import { AxiosResponse } from "axios"
import { nanoid } from "nanoid"
import { makeAutoObservable } from "mobx"
import { IAssembledSchedulesStore } from "../types/store"
import { IAssembledSchedule } from "../types/types"
import { capitalize } from "../utils/stringUtils"
import { api } from "../../api"

class AssembledSchedulesStore implements IAssembledSchedulesStore {
	assembledSchedules: IAssembledSchedule[] = []
  activeScheduleUid: string | null = null // schedule that will be rendered on the main page
  isLoading: boolean = true
  static activeScheduleUidStorageKey = "active-assembled-schedule-uid"

	constructor() {
		makeAutoObservable(this)
		this.restoreState()
	}

	memorizeState(): void {
    this.activeScheduleUid && localStorage.setItem(AssembledSchedulesStore.activeScheduleUidStorageKey, this.activeScheduleUid)
	}

	restoreState() {
    api
      .get("users/me/assembled-schedules")
      .then((response: AxiosResponse<{assembledSchedules: IAssembledSchedule[]}>) => {
        this.assembledSchedules = response.data.assembledSchedules
      }).catch(err => {
        console.error(`Can't fetch assembled schedules:\n`,err.message)
      }).finally(() => {
          this.isLoading = false
          this.activeScheduleUid = localStorage.getItem(AssembledSchedulesStore.activeScheduleUidStorageKey) || null
      })
	}

	async addSchedule(newSchedule: Omit<IAssembledSchedule, "uid">, uid?: string) {
    this.isLoading = true

    const newFormattedSchedule = {
      ...newSchedule,
      uid: uid || nanoid(10),
      name: capitalize(newSchedule.name)
    }

    api
      .post("users/me/assembled-schedules", {
        ...newFormattedSchedule
      })
      .then((response: AxiosResponse<{assembledSchedules: IAssembledSchedule[]}>) => {
        this.assembledSchedules = response.data.assembledSchedules
        console.log("Assembled schedule added successfully")
      })
      .catch(err => {
        console.error("Can't add new assembled schedule:\n", err.message)
      })
      .finally(() => {
        this.isLoading = false
      })
	}

	async removeSchedule(uid: string) {
    this.isLoading = true
    api
      .delete(`users/me/assembled-schedules/${uid}`)
      .then((response: AxiosResponse<{assembledSchedules: IAssembledSchedule[]}>) => {
        this.assembledSchedules = response.data.assembledSchedules
        console.log("Assembled schedule deleted successfully")
      })
      .catch(err => {
        console.error(`Can't delete assebmled schedule with id "${uid}":\n`, err.message)
      })
      .finally(() => {
        this.isLoading = false
      })
	}

	async updateSchedule(uid: string, updatedFields: Partial<Omit<IAssembledSchedule, "uid">>) {
    const indexToUpdate = this.assembledSchedules.findIndex(s => s.uid === uid)
		if (indexToUpdate === -1) {
      console.error(`Can't update.\nAssembled schedule with id: "${uid}" not found.`)
			return false
		}

    this.isLoading = true
    
		const updatedSchedule = {
      ...this.assembledSchedules[indexToUpdate],
			...updatedFields
		}

    api
      .put(`users/me/assembled-schedules/${uid}`, {
        ...updatedSchedule
      }).then((response: AxiosResponse<{assembledSchedules: IAssembledSchedule[]}>) => {
        this.assembledSchedules = response.data.assembledSchedules
        console.log("Assembled schedule modified successfully")
      })
      .catch(err => {
        console.error("Can't update assembled schedule:\n", err.message)
      })
      .finally(() => {
        this.isLoading = false
      })
	}

  activateSchedule(uid: string) {
    this.activeScheduleUid = uid
    this.memorizeState()
  }

  // "get" doesn't really fit here, but neither anything else I can think of...
  getActiveSchedule(): IAssembledSchedule | null {
    // it's can only be null if activeScheduleUid === null, or activeScheduleUid is refering deleted schedule
    const activeSchedule = this.assembledSchedules.find(s => s.uid === this.activeScheduleUid) || null
    
    // if it's there - return it
    if (activeSchedule) return activeSchedule

    // if not, then it tries to activate and return first schedule
    if (!activeSchedule && this.assembledSchedules.length !== 0) {
      this.activateSchedule(this.assembledSchedules[0].uid)
      return this.assembledSchedules[0]
    }
    
    // and only if there is no assembled schedules...
    return null
  }

  getById(uid: string) {
    return this.assembledSchedules.find(s => s.uid === uid)
  }

  dayIsEmptyOrUndefined(scheduleUid: string, dayIndex: number): boolean {
    const targetSchedule = this.getById(scheduleUid)

    if (!targetSchedule) throw new Error(`Assembled schedule with passed id: ${scheduleUid} is not present in the store... somehow...`)
    
    const targetDay = targetSchedule.days[dayIndex]

    if (!targetDay) return true

    return targetDay.classIds.filter(l => l !== "hidden").length === 0
  }
}

export default AssembledSchedulesStore
