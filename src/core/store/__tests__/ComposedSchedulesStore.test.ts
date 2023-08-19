import ComposedSchedulesStore from "../ComposedSchedulesStore"

describe("Testing ComposedSchedulesStore", () => {
	it("Tests addSchedule action", () => {
		const composedSchedulesStore = new ComposedSchedulesStore()

		expect(composedSchedulesStore.composedSchedules).toHaveLength(0)

		// With uid passed
		composedSchedulesStore.addSchedule({
			name: "New composed schedule 1",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], ringsScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], ringsScheduleId: "r-id-2"}
			]
		}, "new-uid-1")
		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)
		expect(composedSchedulesStore.composedSchedules[0]).toEqual({
			name: "New composed schedule 1",
			uid: "new-uid-1",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], ringsScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], ringsScheduleId: "r-id-2"}
			]
		})

		// Without uid passed
		composedSchedulesStore.addSchedule({
			name: "New composed schedule 2",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], ringsScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], ringsScheduleId: "r-id-2"}
			]
		})
		expect(composedSchedulesStore.composedSchedules).toHaveLength(2)
		expect(composedSchedulesStore.composedSchedules[1]).toHaveProperty("uid")
		expect(composedSchedulesStore.composedSchedules[1]).toMatchObject({
			name: "New composed schedule 2",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], ringsScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], ringsScheduleId: "r-id-2"}
			]
		})

		// Test formatting for "name" property
		composedSchedulesStore.addSchedule({
			name: "new composed schedule 3",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], ringsScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], ringsScheduleId: "r-id-2"}
			]
		})
		expect(composedSchedulesStore.composedSchedules).toHaveLength(3)
		expect(composedSchedulesStore.composedSchedules[2].name).toBe("New composed schedule 3")
	})

	it("Tests removeSchedule action", () => {
		const composedSchedulesStore = new ComposedSchedulesStore()
    expect(composedSchedulesStore.composedSchedules).toHaveLength(0)
    
		composedSchedulesStore.addSchedule({
      name: "New composed schedule 1",
			days: [
        {lessonIds: ["l-id-1", "l-id-2"], ringsScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], ringsScheduleId: "r-id-2"}
			]
		}, "new-uid-1")
    expect(composedSchedulesStore.composedSchedules).toHaveLength(1)

		// Try removing non-existing schedule
		let removedSuccessfully: boolean | null = composedSchedulesStore.removeSchedule("some-non-existing-uid")
		expect(removedSuccessfully).toBe(false)
		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)

		// Remove existing schedule
		removedSuccessfully = null
		removedSuccessfully = composedSchedulesStore.removeSchedule("new-uid-1")
		expect(removedSuccessfully).toBe(true)
		expect(composedSchedulesStore.composedSchedules).toHaveLength(0)
	})

	it("Tests updateSchedule action", () => {
		const composedSchedulesStore = new ComposedSchedulesStore()

		composedSchedulesStore.addSchedule({
			name: "New composed schedule 1",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], ringsScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], ringsScheduleId: "r-id-2"}
			]
		}, "new-uid-1")

		// Try updating non-existing schedule
		composedSchedulesStore.updateSchedule("non-existing-uid", {
			name: "Nevermind",
			days: [
				{lessonIds: ["123", "543"], ringsScheduleId: "fghrt"},
				{lessonIds: ["sdfg", "768"], ringsScheduleId: "4gdfg"}
			]
		})
		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)
		expect(composedSchedulesStore.composedSchedules[0]).toEqual({
			name: "New composed schedule 1",
			uid: "new-uid-1",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], ringsScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], ringsScheduleId: "r-id-2"}
			]
		})

		// Update existing schedule
		composedSchedulesStore.updateSchedule("new-uid-1", {
			name: "Updated composed schedule 1",
			days: [
				{lessonIds: ["123", "543"], ringsScheduleId: "fghrt"},
				{lessonIds: ["sdfg", "768"], ringsScheduleId: "4gdfg"}
			]
		})
		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)
		expect(composedSchedulesStore.composedSchedules[0]).toEqual({
			name: "Updated composed schedule 1",
			uid: "new-uid-1",
			days: [
				{lessonIds: ["123", "543"], ringsScheduleId: "fghrt"},
				{lessonIds: ["sdfg", "768"], ringsScheduleId: "4gdfg"}
			]
		})
	})
})
