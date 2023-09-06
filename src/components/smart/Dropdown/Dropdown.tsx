import { useContext, useRef, useState } from "react"
import { CSSTransition } from "react-transition-group"
import { observer } from "mobx-react"

import useCloseDropdownOnLocationChange from "../../../core/hooks/useCloseDropdownOnLocationChange"
import useResetDropdownWhenClosed from "../../../core/hooks/useResetDropdownWhenClosed"
import { StoreContext } from "../../.."

import { StyledDropdown } from "./Dropdown.styled"
import DropdownSettings from "./DropdownSettings"
import DropdownMain from "./DropdownMain"

const Dropdown = () => {
	const { uiStore } = useContext(StoreContext)
  const activeMenu = uiStore.activeDropdownMenu
  
  const menuRef = useRef<HTMLDivElement>(null)
  const [menuHeight, setMenuHeight] = useState<number | null>(null)  

  const calculateHeight = useResetDropdownWhenClosed(uiStore, menuRef, setMenuHeight)
  useCloseDropdownOnLocationChange(uiStore)

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
