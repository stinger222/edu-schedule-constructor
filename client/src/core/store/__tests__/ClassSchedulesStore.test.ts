// import ClassSchedulesStore from "../ClassSchedulesStore"

/*
  BTW Im intentionally not moving all of these "sub-tests" in one "it" to their own "it"s.
  Despite testing itself is shit, I want to sure that bunch of subsequent calls will not break anything
*/

// describe("Testing ClassSchedulesStore", () => {
	// it("Tests addSchedule action", () => {
	// 	const classSchedulesStore = new ClassSchedulesStore()

	// 	expect(classSchedulesStore.classSchedules).toHaveLength(0)

	// 	// With uid passed:
	// 	classSchedulesStore.addSchedule({
	// 		name: "New schedule 1",
	// 		classes: [
	// 			{start: "10:00", end: "11:00"},
	// 			{start: "11:00", end: "12:00"}
	// 		]
	// 	}, "some-uid-1")

	// 	expect(classSchedulesStore.classSchedules).toHaveLength(1)
	// 	expect(classSchedulesStore.classSchedules[0]).toEqual({
	// 		name: "New schedule 1",
	// 		uid: "some-uid-1",
	// 		classes: [
	// 			{start: "10:00", end: "11:00"},
	// 			{start: "11:00", end: "12:00"}
	// 		]
	// 	})

	// 	// Without uid passed:
	// 	classSchedulesStore.addSchedule({
	// 		name: "New schedule 2",
	// 		classes: [
	// 			{start: "10:40", end: "12:20"}
	// 		]
	// 	})
	// 	expect(classSchedulesStore.classSchedules).toHaveLength(2)
	// 	expect(classSchedulesStore.classSchedules[1]).toHaveProperty("uid")
	// 	expect(classSchedulesStore.classSchedules[1]).toMatchObject({
	// 		name: "New schedule 2",
	// 		classes: [
	// 			{start: "10:40", end: "12:20"}
	// 		]
	// 	})

	// 	// Test formatting for "name" property:
	// 	classSchedulesStore.addSchedule({
	// 		name: "new schedule 3",
	// 		classes: [
	// 			{start: "13:30", end: "13:50"}
	// 		]
	// 	})
	// 	expect(classSchedulesStore.classSchedules).toHaveLength(3)
	// 	expect(classSchedulesStore.classSchedules[2].name).toBe("New schedule 3")
	// })

	// it("Tests removeSchedule action", () => {
	// 	const classSchedulesStore = new ClassSchedulesStore()

	// 	classSchedulesStore.addSchedule({
	// 		name: "New schedule 1",
	// 		classes: [
	// 			{start: "10:00", end: "11:00"},
	// 			{start: "11:00", end: "12:00"}
	// 		]
	// 	}, "some-uid-1")
	// 	expect(classSchedulesStore.classSchedules).toHaveLength(1)

	// 	// Try removing non-existing schedule:
	// 	let removedSuccessfully: boolean | null = classSchedulesStore.removeSchedule("some-non-existing-uid")
	// 	expect(removedSuccessfully).toBe(false)
	// 	expect(classSchedulesStore.classSchedules).toHaveLength(1)

	// 	// Remove existing schedule:
	// 	removedSuccessfully = null
	// 	removedSuccessfully = classSchedulesStore.removeSchedule("some-uid-1")
	// 	expect(removedSuccessfully).toBe(true)
	// 	expect(classSchedulesStore.classSchedules).toHaveLength(0)
	// })
	
	// it("Tests updateSchedule action", () => {
	// 	const classSchedulesStore = new ClassSchedulesStore()
  //   expect(classSchedulesStore.classSchedules).toHaveLength(0)
    
	// 	classSchedulesStore.addSchedule({
	// 		name: "New class schedule 1",
	// 		classes: [
  //       {start: "10:00", end: "11:00"},
	// 			{start: "11:00", end: "12:00"}
	// 		]
	// 	}, "some-uid-1")
    
  //   expect(classSchedulesStore.classSchedules).toHaveLength(1)
    
	// 	// Try updating non-existing schedule:
	// 	classSchedulesStore.updateSchedule("non-existing-uid", {
  //     name: "whatever",
	// 		classes: [{start: "00:00", end: "05:00"}]
	// 	})
	// 	expect(classSchedulesStore.classSchedules).toHaveLength(1)
	// 	expect(classSchedulesStore.classSchedules[0]).toEqual({
	// 		name: "New class schedule 1",
	// 		uid: "some-uid-1",
	// 		classes: [
  //       {start: "10:00", end: "11:00"},
	// 			{start: "11:00", end: "12:00"}
	// 		]
	// 	})
    
  //   // Update only "name" property:
  //   classSchedulesStore.updateSchedule("some-uid-1", {
	// 		name: "New name of class schedule 1"
	// 	})
	// 	expect(classSchedulesStore.classSchedules).toHaveLength(1)
	// 	expect(classSchedulesStore.classSchedules[0]).toEqual({
	// 		name: "New name of class schedule 1",
	// 		uid: "some-uid-1",
	// 		classes: [
  //       {start: "10:00", end: "11:00"},
	// 			{start: "11:00", end: "12:00"}
	// 		]
	// 	})

  //   // Update only "classes" property:
  //   classSchedulesStore.updateSchedule("some-uid-1", {
  //     classes: [
  //       {start: "10:05", end: "11:05"},
  //       {start: "11:05", end: "12:05"},
  //       {start: "12:05", end: "13:05"}
  //     ]
  //   })
  //   expect(classSchedulesStore.classSchedules).toHaveLength(1)
  //   expect(classSchedulesStore.classSchedules[0]).toEqual({
  //     name: "New name of class schedule 1",
  //     uid: "some-uid-1",
  //     classes: [
  //       {start: "10:05", end: "11:05"},
  //       {start: "11:05", end: "12:05"},
  //       {start: "12:05", end: "13:05"}
  //     ]
  //   })

  //   // Update all properies in one go:
  //   classSchedulesStore.updateSchedule("some-uid-1", {
  //     name: "Once again updated name of class schedule 1",
  //     classes: [
  //       {start: "03:00", end: "04:00"}
  //     ]
  //   })
  //   expect(classSchedulesStore.classSchedules).toHaveLength(1)
  //   expect(classSchedulesStore.classSchedules[0]).toEqual({
  //     name: "Once again updated name of class schedule 1",
  //     uid: "some-uid-1",
  //     classes: [
  //       {start: "03:00", end: "04:00"}
  //     ]
  //   })
	// })
// })
