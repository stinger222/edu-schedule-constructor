import { configure } from "mobx"
import { IAssembledSchedulesStore, IAuthStore, IClassesStore, IClassSchedulesStore, IUIStore } from "./../types/store"
import AssembledSchedulesStore from "./AssembledSchedulesStore"
import ClassSchedulesStore from "./ClassSchedulesStore"
import ClassesStore from "./ClassesStore"
import UIStore from "./UIStore"
import AuthStore from "./AuthStore"

class RootStore {
	uiStore: IUIStore
	classesStore: IClassesStore
	classSchedulesStore: IClassSchedulesStore
	assembledSchedulesStore: IAssembledSchedulesStore
  authStore: IAuthStore

	constructor() {
		this.uiStore = new UIStore()
		this.classesStore = new ClassesStore()
		this.classSchedulesStore = new ClassSchedulesStore()
		this.assembledSchedulesStore = new AssembledSchedulesStore()
    this.authStore = new AuthStore()
	}
}

configure({
  enforceActions: "never"
})

export default RootStore