import BurgerButton from "./BurgerButton/BurgerButton"
import NavBar from "./NavBar/NavBar"
import { StyledHeader } from "./Header.styled"
import { ReactNode } from "react"

interface IHeaderExtensions {
	BurgerButton: typeof BurgerButton,
	NavBar: typeof NavBar,
}
interface IProps {
	children: ReactNode
}

const Header: React.FC<IProps> & IHeaderExtensions = ({ children }) => {

	return (
		<StyledHeader>
			{children}
		</StyledHeader>
	)
}

Header.BurgerButton = BurgerButton
Header.NavBar = NavBar

export default Header
