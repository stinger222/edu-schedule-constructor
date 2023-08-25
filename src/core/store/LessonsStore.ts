import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"

import { capitalize } from "../utils/stringUtils"
import { ILessonsStore } from "./../types/store"
import { ILesson } from "./../types/types"

class LessonsStore implements ILessonsStore {
  public _lessons: ILesson[] = [
    {
      "cabinet": "???",
      "teacher": "<Никто>",
      "title": "<Ничего>",
      "uid": "hidden"
    }
  ]
  storageKey: string = "lessons"

  constructor() {
    makeAutoObservable(this)
    this.restoreState()
  }

  get lessons() {
    return this._lessons.filter((l) => l.uid !== "hidden")
  }

  memorizeState() {
    localStorage.setItem(this.storageKey, JSON.stringify(this._lessons))
  }

  restoreState() {
    this._lessons = JSON.parse(
      localStorage.getItem(this.storageKey) ||
        `[{"cabinet": "???", "teacher": "<Никто>", "title": "<Ничего>", "uid":"hidden"}]`
    )
  }

  addLesson(newLesson: Omit<ILesson, "uid">, uid?: string) {
    this._lessons.push({
      ...newLesson,
      uid: uid || nanoid(10),
      title: capitalize(newLesson.title),
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
