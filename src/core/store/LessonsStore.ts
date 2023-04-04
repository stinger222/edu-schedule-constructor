import { makeAutoObservable } from 'mobx'
import { ILessonsStore } from './../types/store'
import { ILesson } from './../types/types'
import { nanoid } from 'nanoid'

class LessonsStore implements ILessonsStore {
	lessons: ILesson[] = [
		// Example lesson can be placed here by default
		{cabinet: 'default_cabinet', teacher: 'default_teacher', title: 'default_title', uid:'default_uid'}
	]

	constructor() {
		makeAutoObservable(this)
	}

	addLesson(newLesson: Omit<ILesson, 'uid'>) {
		this.lessons.push({...newLesson, uid: nanoid(10)})
	}

	removeLesson(uid: string): boolean {
		const indexToDelete = this.lessons.findIndex(lesson => lesson.uid === uid)
		
		if (indexToDelete != -1) {
			const deletedLesson = this.lessons.splice(indexToDelete, 1)
			console.log('Lesson deleted from store.', deletedLesson);
			return deletedLesson.length === 1 
		}
		
		console.warn(`Lesson with id "${uid}" not found.`)
		return false
	}

	updateLesson(uid: string, newLesson: Omit<ILesson, 'uid'>) {
		this.lessons = this.lessons.map(lesson => {
			if (lesson.uid !== uid) return lesson

			return { uid, ...newLesson }
		})
	}
}

export default LessonsStore