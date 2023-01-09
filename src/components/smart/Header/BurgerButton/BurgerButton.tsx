import { useContext } from "react"
import { StoreContext } from "../../../.."
import { StyledBurgerButton } from "./BurgerButton.styled"

interface IProps {
	style?: React.CSSProperties
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

const BurgerButton: React.FC<IProps> = ({ style, onClick }) => {
	const { uiStore } = useContext(StoreContext)
	
	const defaultOnClick = () => {
		uiStore.toggleDropdown()
	}

	return (
		<StyledBurgerButton style={style} onClick={onClick || defaultOnClick}>
			<div className="burger-line"></div>
			<div className="burger-line"></div>
			<div className="burger-line"></div>
		</StyledBurgerButton>
	)
}

export default BurgerButton
