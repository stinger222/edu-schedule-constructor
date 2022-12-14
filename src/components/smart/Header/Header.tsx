import NavBar from "../../ordinary/NavBar/NavBar"
import { StyledHeader } from "./Header.styled"

const Header = () => {

	const week = ['28', '29', '30', '01', '02', '03', '04']
	return (
		<StyledHeader>
			<NavBar week={week}/>
			<div className="future-burger-button"></div>
		</StyledHeader>
	)
}

export default Header
