/**
 * Settings menu inside dropdown
 */

import { useContext } from "react"
import Button from "../../ui/Button/Button"
import { StoreContext } from "../../.."

const DropdownSettings = () => {

  const { uiStore } = useContext(StoreContext)

  return (
    <div className="dropdown-content">
    <header>
      Settings
    </header>

    <div className="divider"></div>

    <Button> Settings </Button>
    <Button> Settings </Button>
    <Button> Settings </Button>
    <Button> Settings </Button>
    <Button> Settings </Button>
    <Button> Settings </Button>
    <Button onClick={() => uiStore.activeDropdownMenu = "main"}> BACCCK </Button>
  </div>
  )
}

export default DropdownSettings
