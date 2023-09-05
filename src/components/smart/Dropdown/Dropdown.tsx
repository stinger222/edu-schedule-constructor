import { observer } from "mobx-react"
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"

import { StoreContext } from "../../.."
import { StyledDropdown } from "./Dropdown.styled"
import { CSSTransition } from "react-transition-group"
import DropdownMain from "./DropdownMain"
import DropdownSettings from "./DropdownSettings"

const Dropdown = () => {
	const { uiStore } = useContext(StoreContext)
  const activeMenu = uiStore.activeDropdownMenu
  
	const location = useLocation()
  
  const [menuHeight, setMenuHeight] = useState<number | null>(null)  
  const menuRef = useRef<HTMLDivElement>(null)

  const calculateHeight = (element: HTMLDivElement) => {
    if (!element.parentElement) return

    const DropdownComputesStyles = getComputedStyle(element.parentElement)
    const paddingTopPx = parseInt(DropdownComputesStyles.paddingTop)
    const paddingBottomPx = parseInt(DropdownComputesStyles.paddingBottom)
    
    setMenuHeight(element.offsetHeight + paddingTopPx + paddingBottomPx)
  }

	useEffect(() => {
    uiStore.toggleDropdown(false)
	}, [location])

  useLayoutEffect(() => {
    if (menuRef.current) calculateHeight(menuRef.current); console.log(menuRef.current)
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
      >
        <DropdownMain />
      </CSSTransition>

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
      >
        <DropdownSettings />
      </CSSTransition>

		</StyledDropdown>
	)
}

export default observer(Dropdown)
