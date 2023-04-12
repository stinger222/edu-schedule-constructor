import { StoreContext } from "../../.."
import { useContext, useEffect } from "react"
import { observer } from "mobx-react"
import { Link, useLocation } from "react-router-dom"

import { StyledDropdown } from "./Dropdown.styled"
import Button from "../../ui/Button/Button"

const Dropdown = () => {
	const { uiStore } = useContext(StoreContext)
	const location = useLocation()
	
	useEffect(() => {
		uiStore.toggleDropdown(false)
	}, [location])

	return !uiStore.isDropdownOpen ? null : (
		<StyledDropdown>
			<header>
        Меню
			</header>

			<Link to='/composed'>
				<Button>Составленные расписания</Button>
			</Link>

			<Link to="/rings">
				<Button>Расписания звонков</Button>
			</Link>

			<Link to='/lessons'>
				<Button>Добавленные предметы</Button>
			</Link>

		</StyledDropdown>
	)
}

export default observer(Dropdown)
