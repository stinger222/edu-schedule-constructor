import { Dispatch, RefObject, SetStateAction, useCallback, useEffect } from "react"
import { IUIStore } from "../types/store"

const useResetDropdownWhenClosed = (
uiStore: IUIStore,
  menuRef: RefObject<HTMLDivElement>,
  setMenuHeight: Dispatch<SetStateAction<number | null>>
  ) => {
    const calculateHeight = useCallback((element: HTMLDivElement) => {
    const dropdownContent: HTMLElement = (
      element.closest(".dropdown-content") || 
      element.querySelector(".dropdown-content")
    ) as HTMLElement

    if (!dropdownContent) return

    setMenuHeight(dropdownContent.offsetHeight)
  }, [])

  useEffect(() => {
    if (menuRef.current) calculateHeight(menuRef.current)

    return () => {  
      uiStore.activeDropdownMenu = "main"
      setMenuHeight(null)
      menuRef.current && calculateHeight(menuRef.current)
    }
  }, [uiStore.isDropdownOpen, calculateHeight])

  return calculateHeight
}

export default useResetDropdownWhenClosed
