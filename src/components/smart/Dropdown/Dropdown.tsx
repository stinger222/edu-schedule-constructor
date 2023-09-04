import { StoreContext } from "../../.."
import { useContext, useEffect } from "react"
import { observer } from "mobx-react"
import { Link, useLocation } from "react-router-dom"

import { StyledDropdown } from "./Dropdown.styled"
import Button from "../../ui/Button/Button"
import { useTranslation } from "react-i18next"

const Dropdown = () => {
	const { uiStore } = useContext(StoreContext)
	const location = useLocation()
  const { t } = useTranslation()
	
	useEffect(() => {
    uiStore.toggleDropdown(false)
	}, [location])

	return !uiStore.isDropdownOpen ? null : (
		<StyledDropdown>
			<header>
        {t("dropdown.menu")}
			</header>

			<Link to='/composed'>
				<Button> {t("dropdown.composed")} </Button>
			</Link>

			<Link to="/rings">
				<Button> {t("dropdown.rings")} </Button>
			</Link>

			<Link to='/lessons'>
				<Button> {t("dropdown.lessons")} </Button>
			</Link>

		</StyledDropdown>
	)
}

export default observer(Dropdown)
