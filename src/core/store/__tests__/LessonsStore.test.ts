import ClassesStore from "../ClassesStore"

/*
  BTW Im intentionally not moving all of these "sub-tests" in one "it" to their own "it"s.
  Despite testing itself is shit, I want to sure that bunch of subsequent calls will not break anything
*/

describe("Testing classesStore", () => {
	it("Tests default values", () => {
		const classesStore = new ClassesStore()

		expect(classesStore.classes).toHaveLength(0)
		expect(classesStore._classes).toHaveLength(1)
  })

	it("Tests addClass action", () => {
		const classesStore = new ClassesStore()
		
		// With uid passed
		classesStore.addClass({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever"
		}, "some-uid")
		expect(classesStore._classes[1]).toEqual({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever",
			uid: "some-uid"
		})

		// Without uid passed
		classesStore.addClass({
			cabinet: "202w",
			teacher: "Some Teacher's Name 2",
			title: "Math or whatever 2"
		})
		expect(classesStore._classes).toHaveLength(3)
		expect(classesStore._classes[2]).toMatchObject({
			cabinet: "202w",
			teacher: "Some Teacher's Name 2",
			title: "Math or whatever 2"
		})
		expect(classesStore._classes[2]).toHaveProperty("uid")

		// Test formatting for "teacher" & "title" properties
		classesStore.addClass({
			cabinet: "202w",
			teacher: "not capitalized name",
			title: "math or whatever"
		}, "some-uid-2")
		expect(classesStore._classes[3]).toEqual({
			cabinet: "202w",
			teacher: "Not Capitalized Name",
			title: "Math or whatever",
			uid: "some-uid-2"
		})
	})

	it("Tests removeClass action", () => {
		const classesStore = new ClassesStore()

		classesStore.addClass({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever"
		}, "some-uid")
		expect(classesStore._classes).toHaveLength(2)
		
		// Nothing changed
		let removedSuccuessfully: boolean | null = classesStore.removeClass("cant-delelete-this")
		expect(removedSuccuessfully).toBe(false)
		expect(classesStore._classes).toHaveLength(2)
		
		// Nothing changed again
		removedSuccuessfully = null
		removedSuccuessfully = classesStore.removeClass(" ")
		expect(removedSuccuessfully).toBe(false)
		expect(classesStore._classes).toHaveLength(2)

		// Successfully removed
		removedSuccuessfully = null
		removedSuccuessfully = classesStore.removeClass("some-uid")
		expect(removedSuccuessfully).toBe(true)
		expect(classesStore._classes).toHaveLength(1)
	})

	it("Tests updateClass action", () => {
		const classesStore = new ClassesStore()
    expect(classesStore._classes).toHaveLength(1)
    expect(classesStore.classes).toHaveLength(0)

		// Add new class
		classesStore.addClass({
			cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever"
		}, "some-uid")
		expect(classesStore._classes).toHaveLength(2)
		expect(classesStore.classes).toHaveLength(1)
		expect(classesStore.classes[0]).toEqual({
      cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever",
			uid: "some-uid"
		})

    // Try updating non-existing class:
		let updatedSuccessfully: boolean | null = classesStore.updateClass("some-non-existing-uid", {
      cabinet: "whatever",
			teacher: "whatever",
			title: "whatever"
		})
    expect(classesStore._classes).toHaveLength(2)
    expect(classesStore.classes).toHaveLength(1)
		expect(updatedSuccessfully).toBe(false)
		expect(classesStore.classes[0]).toEqual({
      cabinet: "202w",
			teacher: "Some Teacher's Name",
			title: "Math or whatever",
			uid: "some-uid"
		})
    
    // Update only "cabinet" property:
    updatedSuccessfully = null
    updatedSuccessfully = classesStore.updateClass("some-uid", {
      cabinet: "New cabinet"
		})
		expect(updatedSuccessfully).toBe(true)
		expect(classesStore._classes[1]).toEqual({
			cabinet: "New cabinet",
			teacher: "Some Teacher's Name",
			title: "Math or whatever",
			uid: "some-uid"
		})

    // Update only "teacher" property:
    updatedSuccessfully = null
    updatedSuccessfully = classesStore.updateClass("some-uid", {
      teacher: "New teacher"
    })
    expect(updatedSuccessfully).toBe(true)
    expect(classesStore._classes[1]).toEqual({
      cabinet: "New cabinet",
      teacher: "New teacher",
      title: "Math or whatever",
      uid: "some-uid"
    })
    
    // Update only "title" property:
    updatedSuccessfully = null
    updatedSuccessfully = classesStore.updateClass("some-uid", {
      title: "New title"
    })
    expect(updatedSuccessfully).toBe(true)
    expect(classesStore._classes[1]).toEqual({
      cabinet: "New cabinet",
      teacher: "New teacher",
      title: "New title",
      uid: "some-uid"
    })
  })

	it("Tests that getters return correct result", () => {
		const classesStore = new ClassesStore()
		
		classesStore.addClass({cabinet: "101w", teacher: "Some Name", title: "Some title"}, "some-uid")
    
		expect(classesStore._classes).toHaveLength(2)
		expect(classesStore._classes[1]).toEqual({
			cabinet: "101w",
			teacher: "Some Name",
			title: "Some title",
			uid: "some-uid"
		})

		// uid "hidden" is filtered
		expect(classesStore.classes).toHaveLength(1)
		expect(classesStore.classes[0]).toEqual({
			cabinet: "101w",
			teacher: "Some Name",
			title: "Some title",
			uid: "some-uid"
		})
	})
})