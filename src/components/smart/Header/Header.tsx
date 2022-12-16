import BurgerButton from "./BurgerButton/BurgerButton"
import NavBar from "./NavBar/NavBar"
import { StyledHeader } from "./Header.styled"
import { ReactNode } from "react"
import NavHome from "./NavHome/NavHome"

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
