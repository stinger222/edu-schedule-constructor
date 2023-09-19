/**
 * Main dropdown menu with navigation and settings button
 */

import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Button from "../../ui/Button/Button"
import { useContext } from "react"
import { StoreContext } from "../../.."

const DropdownMain = () => {
  const { t } = useTranslation()
  const { uiStore } = useContext(StoreContext)

  return (
    <div className="dropdown-content">
      <header>
        <h1>
          {t("dropdown.main.title")}
        </h1>
			</header>

      <div className="section-divider"></div>

			<Link to='/composed'>
				<Button> {t("dropdown.main.composed")} </Button>
			</Link>

			<Link to="/class-schedules">
				<Button> {t("dropdown.main.classSchedules")} </Button>
			</Link>

			<Link to='/lessons'>
				<Button> {t("dropdown.main.lessons")} </Button>
			</Link>

      <div className="section-divider"></div>

      <Button onClick={() => uiStore.activeDropdownMenu = "settings"}> {t("dropdown.main.settings")} </Button>
    </div>
  )
}

export default DropdownMain
