import { weekDaysRus } from "../../../core/constants/constants"
import NavButton from "../NavButton/NavButton"
import { StyledNavBar } from "./NavBar.styled"

interface IProps {

}

const NavBar: React.FC<IProps> = ({  }) => {
	const week = ['28', '29', '30', '01', '02', '03', '04']

	return (
		<StyledNavBar>
			{week.map((day: string, index: number) => (
			<NavButton caption={weekDaysRus[index]} day={day}/>
		))}
		</StyledNavBar>
	)
}

export default NavBar
