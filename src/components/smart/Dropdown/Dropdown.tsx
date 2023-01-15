import { StoreContext } from "../../.."
import { useContext } from "react"
import { observer } from "mobx-react"
import { Link } from "react-router-dom"

import { StyledDropdown } from "./Dropdown.styled"
import Button from "../../ui/Button/Button"

const Dropdown = () => {
	const isOpen = useContext(StoreContext).uiStore.isDropdownOpen

	return (
		<StyledDropdown style={{visibility: isOpen ? 'visible' : 'hidden'}}>
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
