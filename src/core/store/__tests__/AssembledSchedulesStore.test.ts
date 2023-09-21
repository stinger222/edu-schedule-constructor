import AssembledSchedulesStore from "../AssembledSchedulesStore"

/*
  BTW Im intentionally not moving all of these "sub-tests" in one "it" to their own "it"s.
  Despite testing itself is shit, I want to sure that bunch of subsequent calls will not break anything
*/

describe("Testing AssembledSchedulesStore", () => {
	it("Tests addSchedule action", () => {
		const assembledSchedulesStore = new AssembledSchedulesStore()

		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(0)

		// With uid passed:
		assembledSchedulesStore.addSchedule({
			name: "New assembled schedule 1",
			days: [
				{classIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{classIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		}, "new-uid-1")

		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(1)
		expect(assembledSchedulesStore.assembledSchedules[0]).toEqual({
			name: "New assembled schedule 1",
			uid: "new-uid-1",
			days: [
				{classIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{classIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		})

		// Without uid passed:
		assembledSchedulesStore.addSchedule({
			name: "New assembled schedule 2",
			days: [
				{classIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{classIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		})
		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(2)
		expect(assembledSchedulesStore.assembledSchedules[1]).toEqual(
      expect.objectContaining({
        uid: expect.any(String),
        name: "New assembled schedule 2",
        days: [
          {classIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
          {classIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
        ]
      })
    )

		// Test formatting for "name" property:
		assembledSchedulesStore.addSchedule({
			name: "new assembled schedule 3",
			days: [
				{classIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{classIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		})
		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(3)
		expect(assembledSchedulesStore.assembledSchedules[2].name).toBe("New assembled schedule 3")
	})

	it("Tests removeSchedule action", () => {
		const assembledSchedulesStore = new AssembledSchedulesStore()
    expect(assembledSchedulesStore.assembledSchedules).toHaveLength(0)
    
		assembledSchedulesStore.addSchedule({
      name: "New assembled schedule 1",
			days: [
        {classIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{classIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		}, "new-uid-1")
    expect(assembledSchedulesStore.assembledSchedules).toHaveLength(1)

		// Try removing non-existing schedule:
		let removedSuccessfully: boolean | null = assembledSchedulesStore.removeSchedule("some-non-existing-uid")
		expect(removedSuccessfully).toBe(false)
		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(1)

		// Remove existing schedule:
		removedSuccessfully = null
		removedSuccessfully = assembledSchedulesStore.removeSchedule("new-uid-1")
		expect(removedSuccessfully).toBe(true)
		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(0)
	})

	it("Tests updateSchedule action", () => {
		const assembledSchedulesStore = new AssembledSchedulesStore()

		assembledSchedulesStore.addSchedule({
			name: "New assembled schedule 1",
			days: [
				{classIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{classIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		}, "new-uid-1")

		// Try updating non-existing schedule:
		assembledSchedulesStore.updateSchedule("non-existing-uid", {
			name: "there-is-no-such-uid-in-there",
			days: [
				{classIds: ["123", "543"], classScheduleId: "fghrt"},
				{classIds: ["sdfg", "768"], classScheduleId: "4gdfg"}
			]
		})
		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(1)
		expect(assembledSchedulesStore.assembledSchedules[0]).toEqual({
			name: "New assembled schedule 1",
			uid: "new-uid-1",
			days: [
				{classIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{classIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		})

    // Update only "name" property:
		assembledSchedulesStore.updateSchedule("new-uid-1", {
			name: "Updated name of assembled schedule 1"
		})
		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(1)
		expect(assembledSchedulesStore.assembledSchedules[0]).toEqual({
			name: "Updated name of assembled schedule 1",
			uid: "new-uid-1",
			days: [
				{classIds: ["l-id-1", "l-id-2"], classScheduleId: "r-id-1"},
				{classIds: ["l-id-3", "l-id-1"], classScheduleId: "r-id-2"}
			]
		})

    // Update only "days" property:
		assembledSchedulesStore.updateSchedule("new-uid-1", {
      days: [
				{classIds: ["3129", "2389"], classScheduleId: "gdfpjo"},
				{classIds: ["923487", "2937"], classScheduleId: "cdwklm"}
			]
		})
		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(1)
		expect(assembledSchedulesStore.assembledSchedules[0]).toEqual({
			name: "Updated name of assembled schedule 1",
			uid: "new-uid-1",
      days: [
				{classIds: ["3129", "2389"], classScheduleId: "gdfpjo"},
				{classIds: ["923487", "2937"], classScheduleId: "cdwklm"}
			]
		})
   
		// Update all properies in one go:
		assembledSchedulesStore.updateSchedule("new-uid-1", {
			name: "Once again updated name of assembled schedule 1",
			days: [
				{classIds: ["3490287", "746567"], classScheduleId: "jklfhds"},
				{classIds: ["5346", "72685"], classScheduleId: "ncdjvqs"}
			]
		})
		expect(assembledSchedulesStore.assembledSchedules).toHaveLength(1)
		expect(assembledSchedulesStore.assembledSchedules[0]).toEqual({
			name: "Once again updated name of assembled schedule 1",
      uid: "new-uid-1",
			days: [
				{classIds: ["3490287", "746567"], classScheduleId: "jklfhds"},
				{classIds: ["5346", "72685"], classScheduleId: "ncdjvqs"}
			]
		})
	})
})
