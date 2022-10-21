import { observer } from "mobx-react"
import { ReactNode, useContext } from "react"
import { StoreContext } from "../.."
import { weekDay } from "../../stores/interfaces"
import StyledHeaderButton from "./HeaderButton.styled"
interface IProps {
	children?: ReactNode,
	day: weekDay
}

const HeaderButton: React.FC<IProps> = ({ children, day }) => {
	const { selectedDay, selectDay } = useContext(StoreContext).uiStore
	
	return (
		<StyledHeaderButton
			className={selectedDay == day ? 'selected' : ''}
			onClick={() => selectDay(day)}
		>
			{children}
		</StyledHeaderButton>
	)
}

export default observer(HeaderButton)
