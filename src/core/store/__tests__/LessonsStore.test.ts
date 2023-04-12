import LessonsStore from "../LessonsStore"

describe('Testing LessonsStore', () => {
	it('Tests default values', () => {
		const lessonsStore = new LessonsStore()

		expect(lessonsStore._lessons[0]).toEqual({
			cabinet: '???',
			teacher: '<Никто>',
			title: '<Ничего>',
			uid:'hidden'
		})
	})

	it('Tests addLesson action', () => {
		const lessonsStore = new LessonsStore()
		
		// With uid passed
		lessonsStore.addLesson({
			cabinet: '202w',
			teacher: 'Some Teacher\'s Name',
			title: 'Math or whatever'
		}, 'some-uid')

		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: '202w',
			teacher: 'Some Teacher\'s Name',
			title: 'Math or whatever',
			uid: 'some-uid'
		})

		// Without uid passed
		lessonsStore.addLesson({
			cabinet: '202w',
			teacher: 'Some Teacher\'s Name 2',
			title: 'Math or whatever 2'
		})

		expect(lessonsStore._lessons[2].cabinet).toBe('202w')
		expect(lessonsStore._lessons[2].teacher).toBe('Some Teacher\'s Name 2')
		expect(lessonsStore._lessons[2].title).toBe('Math or whatever 2')
		expect(lessonsStore._lessons[2].uid).not.toBe('this :/')


		// Test formatting
		lessonsStore.addLesson({
			cabinet: '202w',
			teacher: 'not capitalized name',
			title: 'math or whatever'
		}, 'some-uid-2')

		expect(lessonsStore._lessons[3]).toEqual({
			cabinet: '202w',
			teacher: 'Not Capitalized Name',
			title: 'Math or whatever',
			uid: 'some-uid-2'
		})
	})

	it('Tests removeLesson action', () => {
		const lessonsStore = new LessonsStore()

		lessonsStore.addLesson({
			cabinet: '202w',
			teacher: 'Some Teacher\'s Name',
			title: 'Math or whatever'
		}, 'some-uid')
		expect(lessonsStore._lessons).toHaveLength(2)
		
		// Nothing changed
		let removedSuccuessfully: boolean | null = lessonsStore.removeLesson('cant-delelete-this')
		expect(removedSuccuessfully).toBe(false)
		expect(lessonsStore._lessons).toHaveLength(2)
		
		// Nothing changed again
		removedSuccuessfully = null
		removedSuccuessfully = lessonsStore.removeLesson(' ')
		expect(removedSuccuessfully).toBe(false)
		expect(lessonsStore._lessons).toHaveLength(2)

		// Successfully removed
		removedSuccuessfully = null
		removedSuccuessfully = lessonsStore.removeLesson('some-uid')
		expect(removedSuccuessfully).toBe(true)
		expect(lessonsStore._lessons).toHaveLength(1)
	})

	it('Tests updateLesson action', () => {
		const lessonsStore = new LessonsStore()

		// Add new lesson
		lessonsStore.addLesson({
			cabinet: '202w',
			teacher: 'Some Teacher\'s Name',
			title: 'Math or whatever'
		}, 'some-uid')
		expect(lessonsStore._lessons).toHaveLength(2)
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: '202w',
			teacher: 'Some Teacher\'s Name',
			title: 'Math or whatever',
			uid: 'some-uid'
		})

		// Modify it
		let updatedSuccessfully: boolean | null = lessonsStore.updateLesson('some-uid', {
			cabinet: '105-new',
			teacher: 'New Teacher\'s Name',
			title: 'New title'
		})
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: '105-new',
			teacher: 'New Teacher\'s Name',
			title: 'New title',
			uid: 'some-uid'
		})
		expect(updatedSuccessfully).toBe(true)

		// Try modifying non-existing uid
		updatedSuccessfully = null
		updatedSuccessfully = lessonsStore.updateLesson('some-non-existing-uid', {
			cabinet: 'whatever',
			teacher: 'whatever',
			title: 'whatever'
		})
		expect(updatedSuccessfully).toBe(false)
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: '105-new',
			teacher: 'New Teacher\'s Name',
			title: 'New title',
			uid: 'some-uid'
		})


		// Test formatting
		updatedSuccessfully = null
		updatedSuccessfully = lessonsStore.updateLesson('some-uid', {
			cabinet: '500g',
			teacher: 'not capitalized name',
			title: 'smol title'
		})
		expect(updatedSuccessfully).toBe(true)
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: '500g',
			teacher: 'Not Capitalized Name',
			title: 'Smol title',
			uid: 'some-uid'
		})
	})

	it('Tests that getters / public values return correct result', () => {
		const lessonsStore = new LessonsStore()
		
		lessonsStore.addLesson({cabinet: '101w', teacher: 'Some Name', title: 'Some title'}, 'some-uid')

		expect(lessonsStore._lessons).toHaveLength(2)
		expect(lessonsStore._lessons[1]).toEqual({
			cabinet: '101w',
			teacher: 'Some Name',
			title: 'Some title',
			uid: 'some-uid'
		})

		// uid "hidden" is filtered
		expect(lessonsStore.lessons).toHaveLength(1)
		expect(lessonsStore.lessons[0]).toEqual({
			cabinet: '101w',
			teacher: 'Some Name',
			title: 'Some title',
			uid: 'some-uid'
		})
	})
})
