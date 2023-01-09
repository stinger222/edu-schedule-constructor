import { StyledNavHome } from "./NavHome.styled"
import { ReactComponent as HomeIcon } from '../../../../assets/icons/home.svg'
import { Link } from "react-router-dom"

const NavHome = () => {
	return (
		<Link to="/"> 
			<StyledNavHome>
				<HomeIcon/> 
			</StyledNavHome>
		</Link>
	)
}

export default NavHome
