import { configure } from "mobx"
import MockUIStore from "./MockUIStore"
import { IUIStore, IClassesStore, IClassSchedulesStore, IAssembledSchedulesStore, IAuthStore } from "../../types/store"
import MockAssembledSchedulesStore from "./MockAssembledSchedulesStore"
import MockAuthStore from "./MockAuthStore"
import MockClassSchedulesStore from "./MockClassSchedulesStore"
import MockClassesStore from "./MockClassesStore"


class MockRootStore {
	uiStore: IUIStore
	classesStore: IClassesStore
	classSchedulesStore: IClassSchedulesStore
	assembledSchedulesStore: IAssembledSchedulesStore
  authStore: IAuthStore
  
	constructor() {
		this.uiStore = new MockUIStore()
		this.classesStore = new MockClassesStore()
		this.classSchedulesStore = new MockClassSchedulesStore()
		this.assembledSchedulesStore = new MockAssembledSchedulesStore()
    this.authStore = new MockAuthStore()
	}
}

configure({
  enforceActions: "never"
})

export default MockRootStore