import { RefObject, useCallback, useEffect } from "react"

interface IUseOutsideClick {
  (ref: RefObject<HTMLElement>, isAttached: boolean, onOutsideClick: () => void, ignoreIdList?: string[]): void
}

/**
 * Hook for firing passed callback whenever user clicked outside of passed element
 * 
 * @param ref React ref for element outside of which hook will listen for clicks
 * @param isAttached Indicates if hook should start to listen for clicks (e.g. when dropdown opened)
 * @param onOutsideClick Callback that will be fired when outside click will happen
 * @param ignoreIdList Array of IDs that will not trigger callback when clicked on (e.g. dropdown button)
 */
const useOutsideClick: IUseOutsideClick = (ref, isAttached, onOutsideClick, ignoreIdList = []) => {
  const handleOutsideClick = useCallback((e: any) => {
      if (!ref.current?.contains(e.target) && ignoreIdList.every(i => i !== e.target.id)) {
        onOutsideClick()
      }
  }, [ref])

  useEffect(() => {
    if (!isAttached) return
    
    document.addEventListener("click", handleOutsideClick)

    return () => document.removeEventListener("click", handleOutsideClick)
  }, [isAttached])
}

export default useOutsideClick
