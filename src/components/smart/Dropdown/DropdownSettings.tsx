import { useContext, useRef } from "react"
import { useTranslation } from "react-i18next"

import { StoreContext } from "../../.."
import { ThemeEnum } from "../../../core/types/styled"
import useGetAppState from "../../../core/hooks/useGetAppState"

import Button from "../../ui/Button/Button"
import Textarea from "../../ui/Textarea/Textarea"
import { StyledSelect } from "../../ui/Select/Select.styled"

/**
 * Settings menu inside dropdown
 */

const DropdownSettings = () => {
  const { uiStore, lessonsStore } = useContext(StoreContext)
  const { t, i18n } = useTranslation()
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const [state, importState] = useGetAppState()

  const getAppState = () => {
    console.log(state)
    textAreaRef.current!.value = JSON.stringify(state)
  }

  const importAppState = (jsonSate: string) => {
    importState(jsonSate)
  }

  const handleLangChange = (value: "ru" | "en") => {
    i18n.changeLanguage(value)
    lessonsStore.setDefaultItems()
  }

  const handleThemeChange = (theme: "light" | "dark") => {
    uiStore.userSettings.theme = ThemeEnum[theme]
    uiStore.memorizeState()
  }

  return (
    <div className="dropdown-content">
      <header>
        <h1>{t("dropdown.settings.title")}</h1>
      </header>

      <div className="section-divider"></div>

      <StyledSelect
        label={t("dropdown.settings.language")}
        data={[
          { label: t("dropdown.settings.rus"), value: "ru" },
          { label: t("dropdown.settings.eng"), value: "en" }
        ]}
        defaultValue={i18n.language || localStorage.getItem("i18nextLng")}
        onChange={handleLangChange}
      />
      <StyledSelect
        label={t("dropdown.settings.theme")}
        data={[
          { label: t("dropdown.settings.light"), value: "light" },
          { label: t("dropdown.settings.dark"), value: "dark" }
        ]}
        defaultValue={uiStore.userSettings.theme || ThemeEnum.light}
        onChange={handleThemeChange}
      />

      <div className="section-divider"></div>

      <Textarea
        label={t("dropdown.settings.impextTextareaTitle")}
        placeholder={t("dropdown.settings.impextTextareaPaceholder")}
        ref={textAreaRef}
      />

      <div className="impex-controls">
        <Button onClick={() => importAppState(textAreaRef.current!.value)}>
          {t("dropdown.settings.impextBtnImport")}
        </Button>
        <Button onClick={getAppState}>
          {t("dropdown.settings.impextBtnExport")}
        </Button>
      </div>

      <div className="section-divider"></div>

      <Button onClick={() => (uiStore.activeDropdownMenu = "main")}> {t("dropdown.settings.back")} </Button>
    </div>
  )
}

export default DropdownSettings
