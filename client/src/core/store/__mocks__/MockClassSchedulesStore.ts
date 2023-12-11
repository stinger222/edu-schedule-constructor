import { makeAutoObservable } from "mobx"
import { IClassSchedule } from "../../types/types"
import { IClassSchedulesStore } from "../../types/store"


class MockClassSchedulesStore implements IClassSchedulesStore {
	_classSchedules: IClassSchedule[] = [
    {
      name: "Default (5)",
      uid: "VF9RMoHeG1",
      classes: [
        {
          start: "08:40",
          end: "10:00"
        },
        {
          start: "10:10",
          end: "11:00"
        },
        {
          start: "11:10",
          end: "12:00"
        },
        {
          start: "12:10",
          end: "13:00"
        },
        {
          start: "13:10",
          end: "14:00"
        }
      ]
    },
    {
      name: "Offset +20 (5)",
      uid: "Oy4L_PlhBb",
      classes: [
        {
          start: "09:00",
          end: "10:20"
        },
        {
          start: "10:30",
          end: "11:50"
        },
        {
          start: "12:00",
          end: "13:20"
        },
        {
          start: "13:30",
          end: "14:50"
        },
        {
          start: "15:00",
          end: "16:20"
        }
      ]
    }
  ]
  isLoading: boolean = false

	constructor() {
		makeAutoObservable(this)
	}

  set classSchedules(newClassSchedules: IClassSchedule[]) {
    this._classSchedules = newClassSchedules.map((sch: IClassSchedule) => {
      return MockClassSchedulesStore.formatClassScheduleObject(sch)
    })
  }

  get classSchedules() {
    return this._classSchedules
  }

  restoreState = vi.fn()
  addSchedule = vi.fn()
  updateSchedule = vi.fn()
  removeSchedule = vi.fn()
  getById = vi.fn()
  static formatClassScheduleObject = vi.fn()
}

export default MockClassSchedulesStore
