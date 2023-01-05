import { Link } from "react-router-dom"
import Icon from "../../ordinary/Icon/Icon"
import Button from "../../ui/Button/Button"
import { StyledDropdown } from "./Dropdown.styled"

interface IProps {
}

const Dropdown: React.FC<IProps> = ({ }) => {
	return (
		<StyledDropdown>
      <header>
        Меню
      </header>
			<Link to="/rings">
        <Button>Расписания звонков</Button>
      </Link>

			<Link to='lessons'><Button>Список предметов</Button></Link>
		</StyledDropdown>
	)
}

export default Dropdown
