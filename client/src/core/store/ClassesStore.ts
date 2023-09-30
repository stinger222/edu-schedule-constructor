import { makeAutoObservable, toJS } from "mobx"
import { nanoid } from "nanoid"

import { capitalize } from "../utils/stringUtils"
import { IClassesStore } from "../types/store"
import { IClass } from "../types/types"
import i18n from "../configs/i18next"

class ClassesStore implements IClassesStore {
  public _classes: IClass[] = []
  static storageKey: string = "classes"

  constructor() {
    makeAutoObservable(this)
    this.restoreState()
    this.setDefaultItems()
  }

  get classes() {
    return this._classes.filter((l) => l.uid !== "hidden")
  }

  memorizeState() {
    localStorage.setItem(ClassesStore.storageKey, JSON.stringify(this.classes))
  }

  restoreState() {
    try {
      const storedClasses = JSON.parse(localStorage.getItem(ClassesStore.storageKey) || "[]") 
      this._classes = storedClasses
      this.setDefaultItems()
    } catch(err) {
      console.error(`Fatal error occurred. Can't parse "${ClassesStore.storageKey}" from local storage, so it's value will be cleared.`)
      console.error(err.message)
      
      this._classes = []
      this.setDefaultItems()
      this.memorizeState()
    }

    console.log("Class cards restored:", toJS(this._classes))
  }

  setDefaultItems(): void {
    this._classes = [
      {
        "cabinet": i18n.t("classCard.noCabinet"),
        "teacher": i18n.t("classCard.nobody"),
        "title": i18n.t("classCard.nothing"),
        "uid": "hidden"
      },
      ...this.classes
    ]
  }

  addClass(newClass: Omit<IClass, "uid">, uid?: string) {
    this._classes.push({
      ...newClass,
      uid: uid || nanoid(10),
      title: capitalize(newClass.title) || `Class №${this.classes.length+1}`,
      teacher: capitalize(newClass.teacher, true)
    })

    this.memorizeState()
  }

  removeClass(uid: string): boolean {
    const indexToDelete = this._classes.findIndex((cls) => cls.uid === uid)

    if (indexToDelete === -1) {
      console.warn(`Can't remove.\nClass with id "${uid}" not found.`)
      return false
    }

    const deletedClass = this._classes.splice(indexToDelete, 1)

    this.memorizeState()
    console.log("Class deleted from store.", toJS(deletedClass[0]))
    
    return deletedClass.length === 1
  }

  updateClass(uid: string, newClass: Partial<Omit<IClass, "uid">>): boolean {
    const indexToUpdate = this._classes.findIndex((l) => l.uid === uid)

    if (indexToUpdate === -1) {
      console.warn(`Can't update.\nClass with id "${uid}" not found.`)
      return false
    }

    this._classes[indexToUpdate] = {
      ...this._classes[indexToUpdate],
      ...newClass
    }

    this.memorizeState()
    console.log("Class modified successfully.")
    
    return true
  }

  findById(uid: string): IClass | undefined {
    return this._classes.find(l => l.uid === uid)
  }
}

export default ClassesStore
