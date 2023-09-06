import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { IUIStore } from "../types/store"

const useCloseDropdownOnLocationChange = (uiStore: IUIStore) => {
  const location = useLocation()
  useEffect(() => {
    uiStore.toggleDropdown(false)
  }, [location])
}

export default useCloseDropdownOnLocationChange
