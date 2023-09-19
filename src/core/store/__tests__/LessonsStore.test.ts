import LessonsStore from "../LessonsStore"

/*
  BTW Im intentionally not moving all of these "sub-tests" in one "it" to their own "it"s.
  Despite testing itself is shit, I want to sure that bunch of subsequent calls will not break anything
*/

describe("Testing LessonsStore", () => {
	it("Tests default values", () => {
		const lessonsStore = new LessonsStore()

		expect(lessonsStore.lessons).toHaveLength(0)
		expect(lessonsStore._lessons).toHaveLength(1)
  })

	it("Tests addLesson action", () => {
		const lessonsStore = new LessonsStore()
		
		// With uid passed
		lessonsStore.addLesson({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever"
		}, "some-uid")
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever",
			uid: "some-uid"
		})

		// Without uid passed
		lessonsStore.addLesson({
			cabinet: "202w",
			teacher: "Some Teacher's Name 2",
			title: "Math or whatever 2"
		})
		expect(lessonsStore._lessons).toHaveLength(3)
		expect(lessonsStore._lessons[2]).toMatchObject({
			cabinet: "202w",
			teacher: "Some Teacher's Name 2",
			title: "Math or whatever 2"
		})
		expect(lessonsStore._lessons[2]).toHaveProperty("uid")

		// Test formatting for "teacher" & "title" properties
		lessonsStore.addLesson({
			cabinet: "202w",
			teacher: "not capitalized name",
			title: "math or whatever"
		}, "some-uid-2")
		expect(lessonsStore._lessons[3]).toEqual({
			cabinet: "202w",
			teacher: "Not Capitalized Name",
			title: "Math or whatever",
			uid: "some-uid-2"
		})
	})

	it("Tests removeLesson action", () => {
		const lessonsStore = new LessonsStore()

		lessonsStore.addLesson({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever"
		}, "some-uid")
		expect(lessonsStore._lessons).toHaveLength(2)
		
		// Nothing changed
		let removedSuccuessfully: boolean | null = lessonsStore.removeLesson("cant-delelete-this")
		expect(removedSuccuessfully).toBe(false)
		expect(lessonsStore._lessons).toHaveLength(2)
		
		// Nothing changed again
		removedSuccuessfully = null
		removedSuccuessfully = lessonsStore.removeLesson(" ")
		expect(removedSuccuessfully).toBe(false)
		expect(lessonsStore._lessons).toHaveLength(2)

		// Successfully removed
		removedSuccuessfully = null
		removedSuccuessfully = lessonsStore.removeLesson("some-uid")
		expect(removedSuccuessfully).toBe(true)
		expect(lessonsStore._lessons).toHaveLength(1)
	})

	it("Tests updateLesson action", () => {
		const lessonsStore = new LessonsStore()
    expect(lessonsStore._lessons).toHaveLength(1)
    expect(lessonsStore.lessons).toHaveLength(0)

		// Add new lesson
		lessonsStore.addLesson({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever"
		}, "some-uid")
		expect(lessonsStore._lessons).toHaveLength(2)
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever",
			uid: "some-uid"
		})

    // Try updating non-existing lesson:
		let updatedSuccessfully: boolean | null = lessonsStore.updateLesson("some-non-existing-uid", {
			cabinet: "whatever",
			teacher: "whatever",
			title: "whatever"
		})
		expect(updatedSuccessfully).toBe(false)
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever",
			uid: "some-uid"
		})

    // Update only "cabinet" property:
    updatedSuccessfully = null
    updatedSuccessfully = lessonsStore.updateLesson("some-uid", {
			cabinet: "New cabinet"
		})
		expect(updatedSuccessfully).toBe(true)
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: "New cabinet",
			teacher: "Some Teacher's Name",
			title: "Math or whatever",
			uid: "some-uid"
		})

    // Update only "teacher" property:
    updatedSuccessfully = null
    updatedSuccessfully = lessonsStore.updateLesson("some-uid", {
      teacher: "New teacher"
    })
    expect(updatedSuccessfully).toBe(true)
    expect(lessonsStore._lessons[1]).toEqual({
      cabinet: "New cabinet",
      teacher: "New teacher",
      title: "Math or whatever",
      uid: "some-uid"
    })
    
    // Update only "title" property:
    updatedSuccessfully = null
    updatedSuccessfully = lessonsStore.updateLesson("some-uid", {
      title: "New title"
    })
    expect(updatedSuccessfully).toBe(true)
    expect(lessonsStore._lessons[1]).toEqual({
      cabinet: "New cabinet",
      teacher: "New teacher",
      title: "New title",
      uid: "some-uid"
    })
  })

	it("Tests that getters return correct result", () => {
		const lessonsStore = new LessonsStore()
		
		lessonsStore.addLesson({cabinet: "101w", teacher: "Some Name", title: "Some title"}, "some-uid")
    
		expect(lessonsStore._lessons).toHaveLength(2)
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: "101w",
			teacher: "Some Name",
			title: "Some title",
			uid: "some-uid"
		})

		// uid "hidden" is filtered
		expect(lessonsStore.lessons).toHaveLength(1)
		expect(lessonsStore.lessons[0]).toEqual({
			cabinet: "101w",
			teacher: "Some Name",
			title: "Some title",
			uid: "some-uid"
		})
	})
})