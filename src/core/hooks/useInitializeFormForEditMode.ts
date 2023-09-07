import { useEffect } from "react"
import { UseFormReturn } from "react-hook-form"

// T - type of card in passed cards array
/**
 * @param T Type of card that is being edited, aka object inside `cardsArray` param. (e.g. `IComposedSchedule`, `ILesson` or `IRingsSchedule`)
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
      const cardToEdit = cardsArray
        .find((card: T) => {
          return card.uid === routeState.uid
        })

      methods.reset(cardToEdit)
    }
  }, [])
}

export default useInitializeFormForEditMode