import BurgerButton from "../../ordinary/BurgerButton/BurgerButton"
import NavBar from "../../ordinary/NavBar/NavBar"
import { StyledHeader } from "./Header.styled"

const Header = () => {

	return (
		<StyledHeader>
			<NavBar />
			<BurgerButton />
		</StyledHeader>
	)
}

export default Header
