import { useState } from "react"
import { StyledNavBar } from "./NavBar.styled"
import { formatNumber, getCurrentWeekDates, WeekDays } from "../../../../core/utils/helpers"
import NavButton from "../../../ordinary/NavButton/NavButton"

const NavBar = () => {
	const week = getCurrentWeekDates()
	const todayDate: string = formatNumber(new Date().getDate())
	
	const [selectedDayIndex, setSelectedDayIndex] = useState(week.findIndex(i => i === todayDate))

	const handleSelect = (index: number) => {
		setSelectedDayIndex(index)
	}

	return (
		<StyledNavBar>
			{week.map((date: string, index: number) => (
				<NavButton
					label={WeekDays.getShort()[index]}
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
