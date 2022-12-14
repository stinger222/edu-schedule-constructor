import { useState } from "react"
import { weekDaysRus } from "../../../core/constants/constants"
import { StyledNavBar } from "./NavBar.styled"
import NavButton from "../NavButton/NavButton"

const NavBar = () => {
	const week = ['28', '29', '30', '01', '02', '03', '04']
	const [selectedDayIndex, setSelectedDayIndex] = useState(0)

	const handleSelect = (index: number) => {
		setSelectedDayIndex(index)
	}

	return (
		<StyledNavBar>
			{week.map((day: string, index: number) => (
			<NavButton
				caption={weekDaysRus[index]}
				day={day}
				index={index}
				selectedDayIndex={selectedDayIndex}
				onSelect={handleSelect}
				key={index}
			/>
		))}
		</StyledNavBar>
	)
}

export default NavBar
