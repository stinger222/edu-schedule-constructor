import { toJS } from "mobx"
import { useEffect } from "react"
import { UseFormReturn } from "react-hook-form"

/**
 * @param T Type of card that is being edited, aka object inside `cardsArray` param. (e.g. `IAssembledSchedule`, `IClass` or `IClassSchedule`)
 * @param cardsArray Array where target card will be searched
 * @param routeState State that was passed to current route during redirect. Should have `uid` and `mode` fields specified in order to work
 * @param methods Object returned by `useForm` hook from "react-hook-form" library
 */

function useInitializeFormForEditMode<T extends { uid: string }>(
  cardsArray: T[],
  routeState: Record<"mode" | "uid", string>,
  methods: UseFormReturn<Omit<T, "uid">>
) {
  useEffect(() => {
    if (routeState?.mode === "edit") {
      console.log("cardsArray ", toJS(cardsArray))
      
      const cardToEdit = cardsArray
        .find((card: T) => {
          return card.uid === routeState.uid
        })
        
      console.log("cardToEdit ", toJS(cardToEdit))
      methods.reset(cardToEdit)
    }
  }, [])
}

export default useInitializeFormForEditMode
