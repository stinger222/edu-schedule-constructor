import { useContext } from "react"
import { observer } from "mobx-react"
import { StoreContext } from "../../../.."
import { StyledNavBar } from "./NavBar.styled"
import NavButton from "../../../ordinary/NavButton/NavButton"
import { getCurrentWeekDates, WeekUtils } from "../../../../core/utils/dateTimeUtils"
import { useTranslation } from "react-i18next"

const NavBar = () => {
	const { uiStore } = useContext(StoreContext)

	const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage as "ru" | "en"

	const currentWeekDates = getCurrentWeekDates()

	const handleSelect = (newIndex: number) => {
		uiStore.selectDayIndex(newIndex)
	}

	return (
		<StyledNavBar>
			{currentWeekDates.map((date: string, index: number) => (
				<NavButton
					label={WeekUtils.getShort(lang)[index]}
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
