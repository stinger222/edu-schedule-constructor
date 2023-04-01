import { useContext } from "react"
import { observer } from "mobx-react"
import { StoreContext } from "../../../.."
import { StyledNavBar } from "./NavBar.styled"
import { getCurrentWeekDates, WeekDays } from "../../../../core/utils/helpers"
import NavButton from "../../../ordinary/NavButton/NavButton"

const NavBar = () => {
	const { uiStore } = useContext(StoreContext)
	
	const currentWeekDates = getCurrentWeekDates()

	const handleSelect = (newIndex: number) => {
		uiStore.selectDayIndex(newIndex)
	}

	return (
		<StyledNavBar>
			{currentWeekDates.map((date: string, index: number) => (
				<NavButton
					label={WeekDays.getShort()[index]}
					date={date}
					index={index}
					selectedDayIndex={uiStore.selectedDayIndex}
					onSelect={handleSelect}
					key={date}
				/>
		))}
		</StyledNavBar>
	)
}

export default observer(NavBar)
