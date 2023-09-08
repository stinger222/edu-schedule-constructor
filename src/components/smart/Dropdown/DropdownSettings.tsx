import { useContext } from "react"
import Button from "../../ui/Button/Button"
import { StoreContext } from "../../.."
import { StyledSelect } from "../../ui/Select/Select.styled"
import { useTranslation } from "react-i18next"
import { ThemeEnum } from "../../../core/types/styled"

/**
 * Settings menu inside dropdown
 */

const DropdownSettings = () => {
  const { uiStore } = useContext(StoreContext)
  const { t, i18n } = useTranslation()

  const handleLangChange = (value: "ru" | "en") => {
    i18n.changeLanguage(value)
  }

  const handleThemeChange = (theme: "light" | "dark") => {
    uiStore.userSettings.theme = ThemeEnum[theme]
    uiStore.memorizeState()
  }

  return (
    <div className="dropdown-content">
    <header>
      Settings
    </header>

    <div className="divider"></div>

    <StyledSelect
      label="Language"
      data={[{label: "Russian", value: "ru"}, {label: "English", value: "en"}]}
      defaultValue={i18n.language || localStorage.getItem("i18nextLng")}
      onChange={handleLangChange}
    />
    <StyledSelect
      label="Theme"
      data={[{label: "Light", value: "light"}, {label: "Dark", value: "dark"}]}
      defaultValue={uiStore.userSettings.theme}
      onChange={handleThemeChange}
    />
    <Button onClick={() => uiStore.activeDropdownMenu = "main"}> BACCCK </Button>
  </div>
  )
}

export default DropdownSettings
