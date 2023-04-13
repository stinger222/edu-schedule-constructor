import { toJS } from "mobx"
import { makeAutoObservable } from "mobx"
import { ILessonsStore } from "./../types/store"
import { ILesson } from "./../types/types"
import { nanoid } from "nanoid"
import { capitalize } from "../utils/stringUtils"

class LessonsStore implements ILessonsStore {
	public _lessons: ILesson[] = [
		// Empty lesson
		{cabinet: "???", teacher: "<Никто>", title: "<Ничего>", uid:"hidden"}
	]

	constructor() {
		makeAutoObservable(this)
	}

	get lessons() {
		return this._lessons.filter(l => l.uid !== "hidden")
	}

	addLesson(newLesson: Omit<ILesson, "uid">, uid?: string) {
		

		this._lessons.push({
			...newLesson,
			uid: uid || nanoid(10),
			title: capitalize(newLesson.title),
			teacher: capitalize(newLesson.teacher, true)
		})
	}

	removeLesson(uid: string): boolean {
		const indexToDelete = this._lessons.findIndex(lesson => lesson.uid === uid)
		
		if (indexToDelete === -1) {
			console.warn(`Can't remove.\nLesson with id "${uid}" not found.`)
			return false
		}
		
		const deletedLesson = this._lessons.splice(indexToDelete, 1)
		console.log("Lesson deleted from store.", toJS(deletedLesson[0]))
		return deletedLesson.length === 1
	}

	updateLesson(uid: string, newLesson: Omit<ILesson, "uid">): boolean {
		const indexToUpdate = this._lessons.findIndex(l => l.uid === uid)

		if (indexToUpdate === -1) {
			console.warn(`Can't update.\nLesson with id "${uid}" not found.`)
			return false
		}

		this._lessons[indexToUpdate] = {
			uid,
			...newLesson,
			title: capitalize(newLesson.title),
			teacher: capitalize(newLesson.teacher, true)
		}

		console.log("Lesson modified successfully.")
		return true
	}
}

export default LessonsStore