import { configure } from "mobx"
import { IComposedSchedulesStore, IClassesStore, IClassSchedulesStore, IUIStore } from "./../types/store"
import ComposedSchedulesStore from "./ComposedSchedulesStore"
import ClassSchedulesStore from "./ClassSchedulesStore"
import ClassesStore from "./ClassesStore"
import UIStore from "./UIStore"
class RootStore {
	uiStore: IUIStore
	classesStore: IClassesStore
	classSchedulesStore: IClassSchedulesStore
	composedSchedulesStore: IComposedSchedulesStore

	constructor() {
		this.uiStore = new UIStore()
		this.classesStore = new ClassesStore()
		this.classSchedulesStore = new ClassSchedulesStore()
		this.composedSchedulesStore = new ComposedSchedulesStore()
	}
}

configure({
    enforceActions: "never"
})

export default RootStore