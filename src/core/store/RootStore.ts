import { configure } from "mobx"
import { IAssembledSchedulesStore, IClassesStore, IClassSchedulesStore, IUIStore } from "./../types/store"
import AssembledSchedulesStore from "./AssembledSchedulesStore"
import ClassSchedulesStore from "./ClassSchedulesStore"
import ClassesStore from "./ClassesStore"
import UIStore from "./UIStore"
class RootStore {
	uiStore: IUIStore
	classesStore: IClassesStore
	classSchedulesStore: IClassSchedulesStore
	assembledSchedulesStore: IAssembledSchedulesStore

	constructor() {
		this.uiStore = new UIStore()
		this.classesStore = new ClassesStore()
		this.classSchedulesStore = new ClassSchedulesStore()
		this.assembledSchedulesStore = new AssembledSchedulesStore()
	}
}

configure({
    enforceActions: "never"
})

export default RootStore