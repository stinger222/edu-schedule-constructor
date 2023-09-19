import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"

import { capitalize } from "../utils/stringUtils"
import { ILessonsStore } from "./../types/store"
import { ILesson } from "./../types/types"
import i18n from "../configs/i18next"

class LessonsStore implements ILessonsStore {
  public _lessons: ILesson[] = []
  static storageKey: string = "lessons"

  constructor() {
    makeAutoObservable(this)
    this.restoreState()
    this.setDefaultItems()
  }

  get lessons() {
    return this._lessons.filter((l) => l.uid !== "hidden")
  }

  memorizeState() {
    localStorage.setItem(LessonsStore.storageKey, JSON.stringify(this.lessons))
  }

  restoreState() {
    try {
      const storedClasses = JSON.parse(localStorage.getItem(LessonsStore.storageKey) || "[]") 
      this._lessons = storedClasses
      this.setDefaultItems()
    } catch(err) {
      console.error(`Fatal error occurred. Can't parse "${LessonsStore.storageKey}" from local storage, so it's value will be cleared.`)
      console.error(err.message)
      
      this._lessons = []
      this.setDefaultItems()
      this.memorizeState()
    }

    console.log("Class cards restored:", toJS(this._lessons))
  }

  setDefaultItems(): void {
    this._lessons = [
      {
        "cabinet": i18n.t("lessonCard.noCabinet"),
        "teacher": i18n.t("lessonCard.nobody"),
        "title": i18n.t("lessonCard.nothing"),
        "uid": "hidden"
      },
      ...this.lessons
    ]
  }

  addLesson(newLesson: Omit<ILesson, "uid">, uid?: string) {
    this._lessons.push({
      ...newLesson,
      uid: uid || nanoid(10),
      title: capitalize(newLesson.title) || `Lesson №${this.lessons.length+1}`,
      teacher: capitalize(newLesson.teacher, true)
    })

    this.memorizeState()
  }

  removeLesson(uid: string): boolean {
    const indexToDelete = this._lessons.findIndex((lesson) => lesson.uid === uid)

    if (indexToDelete === -1) {
      console.warn(`Can't remove.\nLesson with id "${uid}" not found.`)
      return false
    }

    const deletedLesson = this._lessons.splice(indexToDelete, 1)
    console.log("Lesson deleted from store.", toJS(deletedLesson[0]))
    this.memorizeState()
    return deletedLesson.length === 1
  }

  updateLesson(uid: string, newLesson: Partial<Omit<ILesson, "uid">>): boolean {
    const indexToUpdate = this._lessons.findIndex((l) => l.uid === uid)

    if (indexToUpdate === -1) {
      console.warn(`Can't update.\nLesson with id "${uid}" not found.`)
      return false
    }

    this._lessons[indexToUpdate] = {
      ...this._lessons[indexToUpdate],
      ...newLesson
    }

    console.log("Lesson modified successfully.")
    return true
  }

  findById(uid: string): ILesson | undefined {
    return this._lessons.find(l => l.uid === uid)
  }
}

export default LessonsStore
