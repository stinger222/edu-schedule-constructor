import { useContext } from "react"
import { StoreContext } from "../.."

// TODO: refactor
const useGetAppState = (): any => {
  const rootState = useContext(StoreContext)

  const l = localStorage.getItem(rootState.lessonsStore.storageKey)
  const r = localStorage.getItem(rootState.ringsSchedulesStore.storageKey)
  const c = localStorage.getItem(rootState.composedSchedulesStore.storageKey)

  const state = {
    lessonsStore: l,
    ringsSchedulesStore: r,
    composedSchedulesStore: c
  }

  const importState = (jsonState: string) => {
    console.log(jsonState)
    
    const parsedState = JSON.parse(jsonState)
    console.log("parsedState: ", parsedState)

    localStorage.setItem(rootState.lessonsStore.storageKey, parsedState.lessonsStore)
    localStorage.setItem(rootState.ringsSchedulesStore.storageKey, parsedState.ringsSchedulesStore)
    localStorage.setItem(rootState.composedSchedulesStore.storageKey, parsedState.composedSchedulesStore)
    
  }

  return [state, importState]
}

export default useGetAppState