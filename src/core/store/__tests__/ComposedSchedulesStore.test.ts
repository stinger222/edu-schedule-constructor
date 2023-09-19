import ComposedSchedulesStore from "../ComposedSchedulesStore"

/*
  BTW Im intentionally not moving all of these "sub-tests" in one "it" to their own "it"s.
  Despite testing itself is shit, I want to sure that bunch of subsequent calls will not break anything
*/

describe("Testing ComposedSchedulesStore", () => {
	it("Tests addSchedule action", () => {
		const composedSchedulesStore = new ComposedSchedulesStore()

		expect(composedSchedulesStore.composedSchedules).toHaveLength(0)

		// With uid passed:
		composedSchedulesStore.addSchedule({
			name: "New composed schedule 1",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		}, "new-uid-1")

		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)
		expect(composedSchedulesStore.composedSchedules[0]).toEqual({
			name: "New composed schedule 1",
			uid: "new-uid-1",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		})

		// Without uid passed:
		composedSchedulesStore.addSchedule({
			name: "New composed schedule 2",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		})
		expect(composedSchedulesStore.composedSchedules).toHaveLength(2)
		expect(composedSchedulesStore.composedSchedules[1]).toEqual(
      expect.objectContaining({
        uid: expect.any(String),
        name: "New composed schedule 2",
        days: [
          {lessonIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
          {lessonIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
        ]
      })
    )

		// Test formatting for "name" property:
		composedSchedulesStore.addSchedule({
			name: "new composed schedule 3",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
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
        {lessonIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		}, "new-uid-1")
    expect(composedSchedulesStore.composedSchedules).toHaveLength(1)

		// Try removing non-existing schedule:
		let removedSuccessfully: boolean | null = composedSchedulesStore.removeSchedule("some-non-existing-uid")
		expect(removedSuccessfully).toBe(false)
		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)

		// Remove existing schedule:
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
				{lessonIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		}, "new-uid-1")

		// Try updating non-existing schedule:
		composedSchedulesStore.updateSchedule("non-existing-uid", {
			name: "there-is-no-such-uid-in-there",
			days: [
				{lessonIds: ["123", "543"], classScheduleId: "fghrt"},
				{lessonIds: ["sdfg", "768"], classScheduleId: "4gdfg"}
			]
		})
		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)
		expect(composedSchedulesStore.composedSchedules[0]).toEqual({
			name: "New composed schedule 1",
			uid: "new-uid-1",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		})

    // Update only "name" property:
		composedSchedulesStore.updateSchedule("new-uid-1", {
			name: "Updated name of composed schedule 1"
		})
		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)
		expect(composedSchedulesStore.composedSchedules[0]).toEqual({
			name: "Updated name of composed schedule 1",
			uid: "new-uid-1",
			days: [
				{lessonIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{lessonIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		})

    // Update only "days" property:
		composedSchedulesStore.updateSchedule("new-uid-1", {
      days: [
				{lessonIds: ["3129", "2389"], classScheduleId: "gdfpjo"},
				{lessonIds: ["923487", "2937"], classScheduleId: "cdwklm"}
			]
		})
		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)
		expect(composedSchedulesStore.composedSchedules[0]).toEqual({
			name: "Updated name of composed schedule 1",
			uid: "new-uid-1",
      days: [
				{lessonIds: ["3129", "2389"], classScheduleId: "gdfpjo"},
				{lessonIds: ["923487", "2937"], classScheduleId: "cdwklm"}
			]
		})
   
		// Update all properies in one go:
		composedSchedulesStore.updateSchedule("new-uid-1", {
			name: "Once again updated name of composed schedule 1",
			days: [
				{lessonIds: ["3490287", "746567"], classScheduleId: "jklfhds"},
				{lessonIds: ["5346", "72685"], classScheduleId: "ncdjvqs"}
			]
		})
		expect(composedSchedulesStore.composedSchedules).toHaveLength(1)
		expect(composedSchedulesStore.composedSchedules[0]).toEqual({
			name: "Once again updated name of composed schedule 1",
      uid: "new-uid-1",
			days: [
				{lessonIds: ["3490287", "746567"], classScheduleId: "jklfhds"},
				{lessonIds: ["5346", "72685"], classScheduleId: "ncdjvqs"}
			]
		})
	})
})
