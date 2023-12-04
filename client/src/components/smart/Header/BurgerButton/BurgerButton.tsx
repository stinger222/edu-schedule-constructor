import { useContext, useRef } from "react"
import { StoreContext } from "../../../.."
import { StyledBurgerButton } from "./BurgerButton.styled"
import Dropdown from "../../Dropdown/Dropdown"

interface IProps {
	style?: React.CSSProperties
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

const BurgerButton = ({ style, onClick }: IProps) => {
	const { uiStore } = useContext(StoreContext)
	const burgerButtonRef = useRef()

	const defaultOnClick = () => {
		uiStore.toggleDropdown()
	}

	return (
		<StyledBurgerButton style={style} onClick={onClick || defaultOnClick} id="burger-button">
			<div className="burger-line"></div>
			<div className="burger-line"></div>
			<div className="burger-line"></div>
		</StyledBurgerButton>
	)
}

export default BurgerButton
