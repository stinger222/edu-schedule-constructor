import { ReactNode } from "react"
import { StyledHeader } from "./Header.styled"
import BurgerButton from "./BurgerButton/BurgerButton"
import NavHome from "./NavHome/NavHome"
import NavBar from "./NavBar/NavBar"

interface IHeaderExtensions {
	BurgerButton: typeof BurgerButton,
	NavBar: typeof NavBar,
	NavHome: typeof NavHome
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
Header.NavHome = NavHome

export default Header
