import { makeAutoObservable } from "mobx"
import { IAssembledSchedulesStore } from "../../types/store"
import { IAssembledSchedule } from "../../types/types"


class MockAssembledSchedulesStore implements IAssembledSchedulesStore {
	assembledSchedules: IAssembledSchedule[] = [
    {
      uid: "qOFLpfpjLK",
      name: "Week Schedule #1",
      days: [
        {
          classScheduleId: "VF9RMoHeG1",
          classIds: [
            "yu6PYLpxnA",
            "TRiz3CPnkU",
            "cjb1ZM2jzJ"
          ]
        },
        {
          classScheduleId: "VF9RMoHeG1",
          classIds: [
            "yu6PYLpxnA",
            "hidden",
            "TRiz3CPnkU",
            "hidden",
            "cjb1ZM2jzJ"
          ]
        },
        {
          classScheduleId: "Oy4L_PlhBb",
          classIds: [
            "cjb1ZM2jzJ",
            "TRiz3CPnkU",
            "TRiz3CPnkU"
          ]
        },
        {
          classScheduleId: "Oy4L_PlhBb",
          classIds: [
            "hidden",
            "TRiz3CPnkU"
          ]
        },
        {
          classScheduleId: "VF9RMoHeG1",
          classIds: [
            "hidden",
            "yu6PYLpxnA",
            "cjb1ZM2jzJ",
            "TRiz3CPnkU",
            "TRiz3CPnkU"
          ]
        }
      ]
    },
    {
      uid: "fYei23qHmx",
      name: "Week Schedule #2",
      days: [
        {
          classScheduleId: "VF9RMoHeG1",
          classIds: [
            "cjb1ZM2jzJ",
            "hidden",
            "cjb1ZM2jzJ"
          ]
        },
        {
          classScheduleId: "VF9RMoHeG1",
          classIds: [
            "cjb1ZM2jzJ",
            "yu6PYLpxnA",
            "TRiz3CPnkU"
          ]
        },
        {
          classScheduleId: "Oy4L_PlhBb",
          classIds: [
            "yu6PYLpxnA",
            "yu6PYLpxnA"
          ]
        },
        {
          classScheduleId: "Oy4L_PlhBb",
          classIds: [
            "hidden"
          ]
        },
        {
          classScheduleId: "VF9RMoHeG1",
          classIds: [
            "cjb1ZM2jzJ"
          ]
        }
      ]
    }
  ]
  activeScheduleUid: string = "qOFLpfpjLK"
  isLoading: boolean = false
  static activeScheduleUidStorageKey = "mock-active-assembled-schedule-uid"

	constructor() {
		makeAutoObservable(this)
	}
  
  memorizeState = vi.fn()
  restoreState = vi.fn()
  addSchedule = vi.fn()
  removeSchedule = vi.fn()
  updateSchedule = vi.fn()
  activateSchedule = vi.fn()
  getResolvedActiveScheduleId = vi.fn()
  getById = vi.fn()
  dayIsEmptyOrUndefined = vi.fn()
}

export default MockAssembledSchedulesStore
