import { renderHook } from "@testing-library/react"
import { useContext } from "react"
import { StoreContext } from "../../../.."
import { render } from "../../../../core/utils/test-utils"
import RootStore from "../../../../core/store/RootStore"
import AssembledScheduleCard from "../AssembledScheduleCard"

let rootStore: RootStore
describe("Testing AssembledScheduleCard component", () => {
  beforeAll(() => {
    rootStore = renderHook(() => useContext(StoreContext)).result.current
    
    rootStore.classSchedulesStore.classSchedules = []
    rootStore.classSchedulesStore.classSchedules.push({
      name: "Test Class Schedule (4 classes described)",
      classes: [
        {start: "08:30", end: "10:00"},
        {start: "10:30", end: "12:00"},
        {start: "12:30", end: "14:00"},
        {start: "14:30", end: "16:00"}
      ],
      uid: "test-classes-schedule"
    })
  })

  it("Properly renders schedule card", () => {
    const screen = render(
      <AssembledScheduleCard
        name="Test Schedule #1"
        days={[
          {classScheduleId: "test-classes-schedule", classIds: ["1", "2", "3", "4"]},
          {classScheduleId: "test-classes-schedule", classIds: ["hidden", "2", "3", "4"]},
          {classScheduleId: "test-classes-schedule", classIds: ["hidden", "hidden", "3", "4"]},
          {classScheduleId: "test-classes-schedule", classIds: ["hidden"]},
          {classScheduleId: "test-classes-schedule", classIds: ["hidden", "hidden", "hidden", "hidden"]}
        ]}
        uid="test-assembled-schedule-id-1"
      />
    )
    expect(screen).toMatchSnapshot()
  })
})