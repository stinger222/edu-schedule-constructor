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
			<Button>Расписания звонков</Button>
			<Button>Список предметов</Button>
		</StyledDropdown>
	)
}

export default Dropdown
