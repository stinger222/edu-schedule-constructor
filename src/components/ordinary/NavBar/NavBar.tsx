import { useState } from "react"
import { weekDaysRus } from "../../../core/constants/constants"
import { StyledNavBar } from "./NavBar.styled"
import { getCurrentWeekDates } from "../../../core/utils/helpers"
import NavButton from "../NavButton/NavButton"

const NavBar = () => {
	const week = getCurrentWeekDates()
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
