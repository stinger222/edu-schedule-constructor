import { StyledNavHome } from "./NavHome.styled"
import { ReactComponent as HomeIcon } from '../../../../assets/icons/home.svg'
import { Link } from "react-router-dom"

const NavHome = () => {
	return (
		<Link to="/"> 
			<StyledNavHome title="To main page">
				<HomeIcon/> 
			</StyledNavHome>
		</Link>
	)
}

export default NavHome
