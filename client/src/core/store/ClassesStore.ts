import { makeAutoObservable } from "mobx"
import { nanoid } from "nanoid"

import { capitalize } from "../utils/stringUtils"
import { IClassesStore } from "../types/store"
import { IClass } from "../types/types"
import i18n from "../configs/i18next"
import { api } from "../../api"

class ClassesStore implements IClassesStore {
  public _classes: IClass[] = []
  static storageKey: string = "classes"

  constructor() {
    makeAutoObservable(this)
    this.restoreState()
    this.addNothingItem()
  }

  // TODO: add setter and filter items with uid === hidden
  get classes() {
    return this._classes.filter((l) => l.uid !== "hidden")
  }

  memorizeState() {
    // localStorage.setItem(ClassesStore.storageKey, JSON.stringify(this.classes))
  }

  async restoreState() {
    try {
      const data = await api.get("users/me/classes").json() as { classes: IClass[] }
      this._classes = data.classes
    } catch(err) {
      console.error("Can't fetch classes:\n", err.message)
      this._classes = []
    } finally {
      this.addNothingItem()
    }
  }

  // Local Storage version:
  // restoreState() {
  //   try {
  //     const storedClasses = JSON.parse(localStorage.getItem(ClassesStore.storageKey) || "[]") 
  //     this._classes = storedClasses
  //     this.setDefaultItems()
  //   } catch(err) {
  //     console.error(`Fatal error occurred. Can't parse "${ClassesStore.storageKey}" from local storage, so it's value will be cleared.`)
  //     console.error(err.message)
      
  //     this._classes = []
  //     this.setDefaultItems()
  //     this.memorizeState()
  //   }

  //   console.log("Class cards restored:", toJS(this._classes))
  // }

  addNothingItem(): void {
    this._classes = [
      ...this.classes,
      {
        "cabinet": i18n.t("classCard.noCabinet"),
        "teacher": i18n.t("classCard.nobody"),
        "title": i18n.t("classCard.nothing"),
        "uid": "hidden"
      }
    ]
  }

  async addClass(newClass: Omit<IClass, "uid">, uid?: string) {
    try {
      const data = (await api
        .post("users/me/classes", {
          json: {
            ...newClass,
            uid: uid || nanoid(10),
            title: capitalize(newClass.title) || `Class №${this.classes.length + 1}`,
            teacher: capitalize(newClass.teacher, true)
          } as IClass
        })
        .json()) as { message: string; classes: IClass[] }

      this._classes = data.classes
      this.addNothingItem()
    } catch(err) {
      console.error("Can't add new class:\n", err.message)
    }
  }

  // addClass(newClass: Omit<IClass, "uid">, uid?: string) {
  //   this._classes.push({
  //     ...newClass,
  //     uid: uid || nanoid(10),
  //     title: capitalize(newClass.title) || `Class №${this.classes.length+1}`,
  //     teacher: capitalize(newClass.teacher, true)
  //   })

  //   this.memorizeState()
  // }

  async removeClass(uid: string) {
    try {
      const data = await api
        .delete(`users/me/classes/${uid}`)
        .json() as {message: string, classes: IClass[]}

      this._classes = data.classes
      this.addNothingItem()

    } catch(err) {
      console.error("Can't delete class:\n", err.message)
    }
  }

  // removeClass(uid: string): boolean {
  //   const indexToDelete = this._classes.findIndex((cls) => cls.uid === uid)

  //   if (indexToDelete === -1) {
  //     console.warn(`Can't remove.\nClass with id "${uid}" not found.`)
  //     return false
  //   }

  //   const deletedClass = this._classes.splice(indexToDelete, 1)

  //   this.memorizeState()
  //   console.log("Class deleted from store.", toJS(deletedClass[0]))
    
  //   return deletedClass.length === 1
  // }

  async updateClass(uid: string, updatedFields: Partial<Omit<IClass, "uid">>) {
    const indexToUpdate = this.classes.findIndex((c) => c.uid === uid)

    if (indexToUpdate === -1) {
      console.warn(`Can't update.\nClass with id "${uid}" not found.`)
      return false
    }

    const updatedClass = {
      ...this.classes[indexToUpdate],
      ...updatedFields
    }

    try {
      const data = await api.put(`users/me/classes/${uid}`, {
        json: {
          ...updatedClass
        }  
      }).json() as { message: string, classes: IClass[] }
      
      this._classes = data.classes
      this.addNothingItem()

      console.log("Class modified successfully.")
    } catch(err) {
      console.error("Can't update class:\n", err.message)
      return false
    }
  }

  // updateClass(uid: string, newClass: Partial<Omit<IClass, "uid">>): boolean {
  //   const indexToUpdate = this._classes.findIndex((l) => l.uid === uid)

  //   if (indexToUpdate === -1) {
  //     console.warn(`Can't update.\nClass with id "${uid}" not found.`)
  //     return false
  //   }

  //   this._classes[indexToUpdate] = {
  //     ...this._classes[indexToUpdate],
  //     ...newClass
  //   }

  //   this.memorizeState()
  //   console.log("Class modified successfully.")
    
  //   return true
  // }

  findById(uid: string): IClass | undefined {
    return this._classes.find(l => l.uid === uid)
  }
}

export default ClassesStore
