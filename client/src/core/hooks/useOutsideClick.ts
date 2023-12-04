import { RefObject, useCallback, useEffect } from "react"

interface IUseOutsideClick {
  (isActive: boolean, onOutsideClick: () => void, ref: RefObject<any>, ignoreIdList: string[]): void
}

/**
 * Hook for firing passed callback whenever user clicked outside of passed element ref.
 * 
 * @param isActive Indicates when hook should start to listen for outside click. (e.g. when dropdown opened)
 * @param onOutsideClick Callback that will be fired when outside click will happen
 * @param ref React ref for element outside of which hook will listen for clicks
 * @param ignoreIdList Array of ids that will not trigger `onOutsideClick` callback (e.g. dropdown button)
 */
const useOutsideClick: IUseOutsideClick = (isActive, onOutsideClick, ref, ignoreIdList = []) => {
  const handleOutsideClick = useCallback((e: any) => {
      if (!ref.current?.contains(e.target) && ignoreIdList.every(i => i !== e.target.id)) {
        onOutsideClick()
      }
  }, [ref])

  useEffect(() => {
    if (!isActive) return
    
    document.addEventListener("click", handleOutsideClick)

    return () => document.removeEventListener("click", handleOutsideClick)
  }, [isActive])
  
}

export default useOutsideClick