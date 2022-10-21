import IconButton from "../IconButton/IconButton";
import { StyledHeader } from "./Header.styled";
import { memo } from "react";
import { Link } from "react-router-dom";

const HeaderSecondary = memo(() => {
	return (
		<StyledHeader className="secondary">
			<Link to='/composed'>
				<IconButton title="Cоставленные расписания" iconPath={require('../../assets/schedules-icon.png')} />
			</Link>

			<Link to='/'>
				<IconButton title="На главную" iconPath={require('../../assets/home-icon.png')} />
			</Link>
			
			<IconButton title="Меню" iconPath={require('../../assets/add-icon.png')} />
		</StyledHeader>
	)
})

export default HeaderSecondary
