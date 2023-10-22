import { nanoid } from "nanoid"
import { makeAutoObservable } from "mobx"
import { capitalize } from "../utils/stringUtils"
import { IClassesStore } from "../types/store"
import { IClass } from "../types/types"
import { api } from "../../api"
import { AxiosResponse } from "axios"
import i18n from "../configs/i18next"

class ClassesStore implements IClassesStore {
  public _classes: IClass[] = []
  isLoading: boolean = true

  constructor() {
    makeAutoObservable(this)
    this.restoreState()
    this.addNothingItem()
  }

  // TODO: add setter and filter items with uid === hidden
  get classes() {
    return this._classes.filter((l) => l.uid !== "hidden")
  }

  restoreState() {
    this.isLoading = true
    api
      .get("users/me/classes")
      .then((response: AxiosResponse<{classes: IClass[]}>) => {
        this._classes = response.data.classes
      })
      .catch(err => {
        console.error("Can't fetch classes:\n", err.message)
        this._classes = []
      })
      .finally(() => {
        this.isLoading = false
        this.addNothingItem()
      })

    // try {
    //   this.isLoading = true
    //   const response = await api
    //     .get("users/me/classes")
    //     // .json() as { classes: IClass[] }
    //   // this._classes = response.classes
    // } catch(err) {
    //   console.error("Can't fetch classes:\n", err.message)
    //   this._classes = []
    // } finally {
    //   this.isLoading = false
    //   this.addNothingItem()
    // }
  }

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
    const newFormattedClass = {
      ...newClass,
      uid: uid || nanoid(10),
      title: capitalize(newClass.title) || `Class №${this.classes.length + 1}`,
      teacher: capitalize(newClass.teacher, true)
    }
    
    this.isLoading = true
    api
      .post("users/me/classes", newFormattedClass)
      .then((response: AxiosResponse<{classes: IClass[]}>) => {
        this._classes = response.data.classes
        this.addNothingItem()
  
        console.log("Class added successfully")
      }).catch(err => {
        console.error("Can't add new class:\n", err.message)

      }).finally(() => {
        this.isLoading = false
      })

    // try {
    //   const newFormattedClass = {
    //     ...newClass,
    //     uid: uid || nanoid(10),
    //     title: capitalize(newClass.title) || `Class №${this.classes.length + 1}`,
    //     teacher: capitalize(newClass.teacher, true)
    //   }
      
    //   this.isLoading = true
    //   const response = await api
    //     .post("users/me/classes", { json: newFormattedClass })
    //   //   .json() as { classes: IClass[] }
    //   // this._classes = response.classes
    //   // this.addNothingItem()

    //   console.log("Class added successfully")
    // } catch(err) {
    //   console.error("Can't add new class:\n", err.message)
    // } finally {
    //   this.isLoading = false
    //   console.log("isLoading is now FALSE!!!!")
    // }
  }

  async removeClass(uid: string) {
      this.isLoading = true
      api
        .delete(`users/me/classes/${uid}`)
        .then((response: AxiosResponse<{classes: IClass[]}>) => {
          this._classes = response.data.classes
          this.addNothingItem()
          console.log("Class deleted successfully")
        })
        .catch(err => {
          console.error("Can't delete class:\n", err.message)
        }).finally(() => {
          this.isLoading = false
        })

    // try {
    //   this.isLoading = true
    //   const response = await api
    //     .delete(`users/me/classes/${uid}`)
    //   //   .json() as { classes: IClass[] }

    //   // this._classes = response.classes
    //   this.addNothingItem()
    //   console.log("Class deleted successfully")
    // } catch(err) {
    //   console.error("Can't delete class:\n", err.message)
    // } finally {
    //   this.isLoading = false
    //   console.log("isLoading is now FALSE!!!!")
    // }
  }

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

    this.isLoading = true
    api
      .put(`users/me/classes/${uid}`, updatedClass)
      .then((response: AxiosResponse<{classes: IClass[]}>) => {
        this._classes = response.data.classes
        this.addNothingItem()

        console.log("Class modified successfully")
      })
      .catch(err => {
        console.error("Can't update class:\n", err.message)
      })
      .finally(() => {
        this.isLoading = false
      })
  }
  //   try {
  //     this.isLoading = true
  //     const response = await api
  //       .put(`users/me/classes/${uid}`, {
  //         json: {
  //           ...updatedClass
  //         }
  //       })
  //       .json() as { classes: IClass[] }
      
  //     this._classes = response.classes
  //     this.addNothingItem()

  //     console.log("Class modified successfully")
  //   } catch(err) {
  //     console.error("Can't update class:\n", err.message)
  //   } finally {
  //     this.isLoading = false
  //     console.log("isLoading is now FALSE!!!!")
  //   }
  // }

  findById(uid: string): IClass | undefined {
    return this._classes.find(l => l.uid === uid)
  }
  
  static formatClassObject(classToFormat: Omit<IClass, "uid">) {
    return {
      ...classToFormat,
      title: capitalize(classToFormat.title).trim(),
      teacher: capitalize(classToFormat.teacher, true).trim(),
      cabinet: classToFormat.cabinet.trim()
    } as IClass
  }
}

export default ClassesStore
