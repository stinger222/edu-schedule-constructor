import RingsSchedulesStore from "../RingsSchedulesStore"

/*
  BTW Im intentionally not moving all of these "sub-tests" in one "it" to their own "it"s.
  Despite testing itself is shit, I want to sure that bunch of subsequent calls will not break anything
*/

describe("Testing RingsSchedulesStore", () => {
	it("Tests addSchedule action", () => {
		const ringsSchedulesStore = new RingsSchedulesStore()

		expect(ringsSchedulesStore.ringsSchedules).toHaveLength(0)

		// With uid passed:
		ringsSchedulesStore.addSchedule({
			name: "New schedule 1",
			rings: [
				{start: "10:00", end: "11:00"},
				{start: "11:00", end: "12:00"}
			]
		}, "some-uid-1")

		expect(ringsSchedulesStore.ringsSchedules).toHaveLength(1)
		expect(ringsSchedulesStore.ringsSchedules[0]).toEqual({
			name: "New schedule 1",
			uid: "some-uid-1",
			rings: [
				{start: "10:00", end: "11:00"},
				{start: "11:00", end: "12:00"}
			]
		})

		// Without uid passed:
		ringsSchedulesStore.addSchedule({
			name: "New schedule 2",
			rings: [
				{start: "10:40", end: "12:20"}
			]
		})
		expect(ringsSchedulesStore.ringsSchedules).toHaveLength(2)
		expect(ringsSchedulesStore.ringsSchedules[1]).toHaveProperty("uid")
		expect(ringsSchedulesStore.ringsSchedules[1]).toMatchObject({
			name: "New schedule 2",
			rings: [
				{start: "10:40", end: "12:20"}
			]
		})

		// Test formatting for "name" property:
		ringsSchedulesStore.addSchedule({
			name: "new schedule 3",
			rings: [
				{start: "13:30", end: "13:50"}
			]
		})
		expect(ringsSchedulesStore.ringsSchedules).toHaveLength(3)
		expect(ringsSchedulesStore.ringsSchedules[2].name).toBe("New schedule 3")
	})

	it("Tests removeSchedule action", () => {
		const ringsSchedulesStore = new RingsSchedulesStore()

		ringsSchedulesStore.addSchedule({
			name: "New schedule 1",
			rings: [
				{start: "10:00", end: "11:00"},
				{start: "11:00", end: "12:00"}
			]
		}, "some-uid-1")
		expect(ringsSchedulesStore.ringsSchedules).toHaveLength(1)

		// Try removing non-existing schedule:
		let removedSuccessfully: boolean | null = ringsSchedulesStore.removeSchedule("some-non-existing-uid")
		expect(removedSuccessfully).toBe(false)
		expect(ringsSchedulesStore.ringsSchedules).toHaveLength(1)

		// Remove existing schedule:
		removedSuccessfully = null
		removedSuccessfully = ringsSchedulesStore.removeSchedule("some-uid-1")
		expect(removedSuccessfully).toBe(true)
		expect(ringsSchedulesStore.ringsSchedules).toHaveLength(0)
	})
	
	it("Tests updateSchedule action", () => {
		const ringsSchedulesStore = new RingsSchedulesStore()
    expect(ringsSchedulesStore.ringsSchedules).toHaveLength(0)
    
		ringsSchedulesStore.addSchedule({
			name: "New rings schedule 1",
			rings: [
        {start: "10:00", end: "11:00"},
				{start: "11:00", end: "12:00"}
			]
		}, "some-uid-1")
    
    expect(ringsSchedulesStore.ringsSchedules).toHaveLength(1)
    
		// Try updating non-existing schedule:
		ringsSchedulesStore.updateSchedule("non-existing-uid", {
      name: "whatever",
			rings: [{start: "00:00", end: "05:00"}]
		})
		expect(ringsSchedulesStore.ringsSchedules).toHaveLength(1)
		expect(ringsSchedulesStore.ringsSchedules[0]).toEqual({
			name: "New rings schedule 1",
			uid: "some-uid-1",
			rings: [
        {start: "10:00", end: "11:00"},
				{start: "11:00", end: "12:00"}
			]
		})
    
    // Update only "name" property:
    ringsSchedulesStore.updateSchedule("some-uid-1", {
			name: "New name of rings schedule 1"
		})
		expect(ringsSchedulesStore.ringsSchedules).toHaveLength(1)
		expect(ringsSchedulesStore.ringsSchedules[0]).toEqual({
			name: "New name of rings schedule 1",
			uid: "some-uid-1",
			rings: [
        {start: "10:00", end: "11:00"},
				{start: "11:00", end: "12:00"}
			]
		})

    // Update only "rings" property:
    ringsSchedulesStore.updateSchedule("some-uid-1", {
      rings: [
        {start: "10:05", end: "11:05"},
        {start: "11:05", end: "12:05"},
        {start: "12:05", end: "13:05"}
      ]
    })
    expect(ringsSchedulesStore.ringsSchedules).toHaveLength(1)
    expect(ringsSchedulesStore.ringsSchedules[0]).toEqual({
      name: "New name of rings schedule 1",
      uid: "some-uid-1",
      rings: [
        {start: "10:05", end: "11:05"},
        {start: "11:05", end: "12:05"},
        {start: "12:05", end: "13:05"}
      ]
    })

    // Update all properies in one go:
    ringsSchedulesStore.updateSchedule("some-uid-1", {
      name: "Once again updated name of rings schedule 1",
      rings: [
        {start: "03:00", end: "04:00"}
      ]
    })
    expect(ringsSchedulesStore.ringsSchedules).toHaveLength(1)
    expect(ringsSchedulesStore.ringsSchedules[0]).toEqual({
      name: "Once again updated name of rings schedule 1",
      uid: "some-uid-1",
      rings: [
        {start: "03:00", end: "04:00"}
      ]
    })
	})
})
