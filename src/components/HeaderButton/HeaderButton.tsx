import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { StoreContext } from "../.."
import StyledHeaderButton from "./HeaderButton.styled"
interface IProps {
	children?: any,
	id: number
}

const HeaderButton: React.FC<IProps> = ({ children, id }) => {
	const { selectedDayId, selectDay } = useContext(StoreContext).uiStore
	
	return (
		<StyledHeaderButton
			className={selectedDayId == id ? 'selected' : ''}
			onClick={() => selectDay(id)}
		>
			{children}
		</StyledHeaderButton>
	)
}

export default observer(HeaderButton)
