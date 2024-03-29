import { StyledNavHome } from "./NavHome.styled"
import HomeIcon from "../../../../assets/icons/home.svg?react"
import { Link } from "react-router-dom"

const NavHome = () => {
	return (
		<Link to="/"> 
			<StyledNavHome title="To the main page">
				<HomeIcon/> 
			</StyledNavHome>
		</Link>
	)
}

export default NavHome
