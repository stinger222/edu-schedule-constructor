/**
 * Settings menu inside dropdown
 */

import { useContext } from "react"
import Button from "../../ui/Button/Button"
import { StoreContext } from "../../.."
import { StyledSelect } from "../../ui/Select/Select.styled"

const DropdownSettings = () => {

  const { uiStore } = useContext(StoreContext)

  return (
    <div className="dropdown-content">
    <header>
      Settings
    </header>

    <div className="divider"></div>

    <StyledSelect label="jqjkdhksajf" data={[{label: "qwe", value: "122323"},{label: "qwe", value: "1664523"}]}/>
    <StyledSelect label="jqjkdhksajf" data={[{label: "qwe", value: "12311223"},{label: "qwe", value: "1656423"}]}/>
    <StyledSelect label="jqjkdhksajf" data={[{label: "qwe", value: "134523"},{label: "qwe", value: "12366423"}]}/>
    <StyledSelect label="jqjkdhksajf" data={[{label: "qwe", value: "165623"},{label: "qwe", value: "1623"}]}/>
    <StyledSelect label="jqjkdhksajf" data={[{label: "qwe", value: "15423"},{label: "qwe", value: "156723"}]}/>
    <Button onClick={() => uiStore.activeDropdownMenu = "main"}> BACCCK </Button>
  </div>
  )
}

export default DropdownSettings
