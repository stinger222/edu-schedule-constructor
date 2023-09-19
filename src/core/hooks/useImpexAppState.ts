import RootStore from "../store/RootStore"
import LessonsStore from "../store/LessonsStore"
import RingsSchedulesStore from "../store/RingsSchedulesStore"
import ComposedSchedulesStore from "../store/ComposedSchedulesStore"

type ImpexAppState = Omit<Record<keyof RootStore, string>, "uiStore">

const useImpexAppState = (): [ImpexAppState, (jsonState: string, onError?: () => void) => void] => {

  const isImpexAppState = (state: ImpexAppState): state is ImpexAppState  => {
    return (
      typeof state.composedSchedulesStore === "string" &&
      typeof state.lessonsStore === "string" &&
      typeof state.ringsSchedulesStore === "string"
    )
  }

  const state: ImpexAppState = {
    lessonsStore: localStorage.getItem(LessonsStore.storageKey) || "[]",
    ringsSchedulesStore: localStorage.getItem(RingsSchedulesStore.storageKey)  || "[]",
    composedSchedulesStore: localStorage.getItem(ComposedSchedulesStore.storageKey) || "[]"
  }

  const importState = (jsonState: string, onError: () => void) => {
    try {
      const parsedState = JSON.parse(jsonState)

      if (!isImpexAppState(parsedState)) throw new Error()

      localStorage.setItem(LessonsStore.storageKey, parsedState.lessonsStore)
      localStorage.setItem(RingsSchedulesStore.storageKey, parsedState.ringsSchedulesStore)
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