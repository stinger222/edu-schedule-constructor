import { StyledDropdown } from "./Dropdown.styled"
import { Link } from "react-router-dom"
import Button from "../../ui/Button/Button"

const Dropdown = ({ }) => {

	return (
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

			<Link to='lessons'>
				<Button>Добавленные предметы</Button>
			</Link>

		</StyledDropdown>
	)
}

export default Dropdown
