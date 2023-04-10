import { capitalize } from './../utils/helpers'
import { toJS } from 'mobx'
import { makeAutoObservable } from 'mobx'
import { ILessonsStore } from './../types/store'
import { ILesson } from './../types/types'
import { nanoid } from 'nanoid'

class LessonsStore implements ILessonsStore {
	public _lessons: ILesson[] = [
		// Empty lesson
		{cabinet: '???', teacher: '<Никто>', title: '<Ничего>', uid:'hidden'}
	]

	constructor() {
		makeAutoObservable(this)
	}

	get lessons() {
		return this._lessons.filter(l => l.uid !== 'hidden')
	}

	addLesson(newLesson: Omit<ILesson, 'uid'>) {
		newLesson.title = capitalize(newLesson.title)
		newLesson.teacher = capitalize(newLesson.teacher, true)

		this._lessons.push({...newLesson, uid: nanoid(10)})
		console.log(toJS(this._lessons));
	}

	removeLesson(uid: string): boolean {
		const indexToDelete = this._lessons.findIndex(lesson => lesson.uid === uid)
		
		if (indexToDelete != -1) {
			const deletedLesson = this._lessons.splice(indexToDelete, 1)
			console.log('Lesson deleted from store.', deletedLesson);
			return deletedLesson.length === 1 
		}
		
		console.warn(`Lesson with id "${uid}" not found.`)
		return false
	}

	updateLesson(uid: string, newLesson: Omit<ILesson, 'uid'>) {
		this._lessons = this._lessons.map(lesson => {
			if (lesson.uid !== uid) return lesson

			return { uid, ...newLesson }
		})
	}
}

export default LessonsStore