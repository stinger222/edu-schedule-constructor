import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { StoreContext } from "../../.."
import { ThemeEnum } from "../../../core/types/styled"
import { StyledSelect } from "../../ui/Select/Select.styled"
import Button from "../../ui/Button/Button"

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
      {t("dropdown.settings.title")}
    </header>

    <div className="divider"></div>

    <StyledSelect
      label={t("dropdown.settings.language")}
      data={[
        {label: t("dropdown.settings.rus"), value: "ru"},
        {label: t("dropdown.settings.eng"), value: "en"}
      ]}
      defaultValue={i18n.language || localStorage.getItem("i18nextLng")}
      onChange={handleLangChange}
    />
    <StyledSelect
      label={t("dropdown.settings.theme")}
      data={[
        {label: t("dropdown.settings.light"), value: "light"},
        {label: t("dropdown.settings.dark"), value: "dark"}
      ]}
      defaultValue={uiStore.userSettings.theme}
      onChange={handleThemeChange}
    />
    <Button onClick={() => uiStore.activeDropdownMenu = "main"}> {t("dropdown.settings.back")} </Button>
  </div>
  )
}

export default DropdownSettings
