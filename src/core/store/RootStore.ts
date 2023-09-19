import { configure } from "mobx"
import { IComposedSchedulesStore, ILessonsStore, IClassSchedulesStore, IUIStore } from "./../types/store"
import ComposedSchedulesStore from "./ComposedSchedulesStore"
import ClassSchedulesStore from "./ClassSchedulesStore"
import LessonsStore from "./LessonsStore"
import UIStore from "./UIStore"
class RootStore {
	uiStore: IUIStore
	lessonsStore: ILessonsStore
	classSchedulesStore: IClassSchedulesStore
	composedSchedulesStore: IComposedSchedulesStore

	constructor() {
		this.uiStore = new UIStore()
		this.lessonsStore = new LessonsStore()
		this.classSchedulesStore = new ClassSchedulesStore()
		this.composedSchedulesStore = new ComposedSchedulesStore()
	}
}

configure({
    enforceActions: "never"
})

export default RootStore