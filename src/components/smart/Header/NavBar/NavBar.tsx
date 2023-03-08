import { useState } from "react"
import { weekDaysRus_short } from "../../../../core/constants/constants"
import { StyledNavBar } from "./NavBar.styled"
import { getCurrentWeekDates } from "../../../../core/utils/helpers"
import NavButton from "../../../ordinary/NavButton/NavButton"

const NavBar = () => {
	const week = getCurrentWeekDates()
	const [selectedDayIndex, setSelectedDayIndex] = useState(0)

	const handleSelect = (index: number) => {
		setSelectedDayIndex(index)
	}

	return (
		<StyledNavBar>
			{week.map((date: string, index: number) => (
				<NavButton
					caption={weekDaysRus_short[index]}
					date={date}
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
