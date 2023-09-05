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
        {t("dropdown.menu")}
			</header>

      <div className="divider"></div>

			<Link to='/composed'>
				<Button> {t("dropdown.composed")} </Button>
			</Link>

			<Link to="/rings">
				<Button> {t("dropdown.rings")} </Button>
			</Link>

			<Link to='/lessons'>
				<Button> {t("dropdown.lessons")} </Button>
			</Link>

      <div className="divider"></div>

      <Button onClick={() => uiStore.activeDropdownMenu = "settings"}> Settings </Button>
    </div>
  )
}

export default DropdownMain
