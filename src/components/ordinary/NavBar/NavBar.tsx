import NavButton from "../NavButton/NavButton"
import { StyledNavBar } from "./NavBar.styled"

interface IProps {
	week: string[]
}

const NavBar: React.FC<IProps> = ({ week }) => {
	const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] // Move to consts

	return (
		<StyledNavBar>
			{week.map((day: string, index: number) => (
			<NavButton caption={weekDays[index]} day={day}/>
		))}
		</StyledNavBar>
	)
}

export default NavBar
