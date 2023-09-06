import { useContext, useEffect, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { useLocation } from "react-router-dom"
import { observer } from "mobx-react"

import { StoreContext } from "../../.."
import { StyledDropdown } from "./Dropdown.styled"
import DropdownSettings from "./DropdownSettings"
import DropdownMain from "./DropdownMain"

const Dropdown = () => {
	const { uiStore } = useContext(StoreContext)
  const activeMenu = uiStore.activeDropdownMenu
  
	const location = useLocation()
  
  const [menuHeight, setMenuHeight] = useState<number | null>(null)  
  const menuRef = useRef<HTMLDivElement>(null)

  const calculateHeight = (element: HTMLDivElement) => {
    const dropdownContent: HTMLElement = element.closest(".dropdown-content") || element.querySelector(".dropdown-content") as HTMLElement

    if (!dropdownContent) return

    setMenuHeight(dropdownContent.offsetHeight)
  }

	useEffect(() => {
    uiStore.toggleDropdown(false)
	}, [location])

  useEffect(() => {
    if (menuRef.current) calculateHeight(menuRef.current)

    return () => {  // When dropdown closed...
      uiStore.activeDropdownMenu = "main"
      setMenuHeight(null)
      menuRef.current && calculateHeight(menuRef.current) // set menuHeight to height of the "main"
    }
  }, [uiStore.isDropdownOpen])

  if (!uiStore.isDropdownOpen) return null

	return (
		<StyledDropdown
      ref={menuRef}
      style={{height: menuHeight ?? "max-content"}}
    >
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={200}
        onEnter={calculateHeight}
        classNames={{
          enterActive: "mainMenuEnterActive",
          enterDone: "mainMenuEnterDone",
          exitActive: "mainMenuExitActive",
          exitDone: "mainMenuExitDone"
        }}
      ><DropdownMain /></CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        onEnter={calculateHeight}
        timeout={200}
        classNames={{
          enterActive: "settingsMenuEnterActive",
          enterDone: "settingsMenuEnterDone",
          exitActive: "settingsMenuExitActive",
          exitDone: "settingsMenuExitDone"
        }}
      ><DropdownSettings /></CSSTransition>
		</StyledDropdown>
	)
}

export default observer(Dropdown)
