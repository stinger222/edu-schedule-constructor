import RootStore from "../store/RootStore"
import ClassesStore from "../store/ClassesStore"
import ClassSchedulesStore from "../store/ClassSchedulesStore"
import ComposedSchedulesStore from "../store/ComposedSchedulesStore"

type ImpexAppState = Omit<Record<keyof RootStore, string>, "uiStore">

const useImpexAppState = (): [ImpexAppState, (jsonState: string, onError?: () => void) => void] => {

  const isImpexAppState = (state: ImpexAppState): state is ImpexAppState  => {
    return (
      typeof state.composedSchedulesStore === "string" &&
      typeof state.classesStore === "string" &&
      typeof state.classSchedulesStore === "string"
    )
  }

  const state: ImpexAppState = {
    classesStore: localStorage.getItem(ClassesStore.storageKey) || "[]",
    classSchedulesStore: localStorage.getItem(ClassSchedulesStore.storageKey)  || "[]",
    composedSchedulesStore: localStorage.getItem(ComposedSchedulesStore.storageKey) || "[]"
  }

  const importState = (jsonState: string, onError: () => void) => {
    try {
      const parsedState = JSON.parse(jsonState)

      if (!isImpexAppState(parsedState)) throw new Error()

      localStorage.setItem(ClassesStore.storageKey, parsedState.classesStore)
      localStorage.setItem(ClassSchedulesStore.storageKey, parsedState.classSchedulesStore)
      localStorage.setItem(ComposedSchedulesStore.storageKey, parsedState.composedSchedulesStore)
      document.location.reload()
    } catch(err){
      console.error(`Error occurred during state import, can't parse passed JSON string:\n${err.message}`)
      onError()
    }
  }

  return [state, importState]
}

export default useImpexAppState