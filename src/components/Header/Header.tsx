import HeaderButton from "../HeaderButton/HeaderButton";
import IconButton from "../IconButton/IconButton";
import { StyledHeader } from "./Header.styled";
import { memo } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = memo(() => {
	return (
		<StyledHeader>
			<Link to='/composed'>
				<IconButton title="Cоставленные расписаний" iconPath={require('../../assets/schedules-icon.png')} />
			</Link>
			
			<HeaderButton day="mon">Пн</HeaderButton>
			<HeaderButton day="tue">Вт</HeaderButton>
			<HeaderButton day="wed">Ср</HeaderButton>
			<HeaderButton day="thu">Чт</HeaderButton>
			<HeaderButton day="fri">Пт</HeaderButton>
			<HeaderButton day="sat">Сб</HeaderButton>
			
			<IconButton title="Меню" iconPath={require('../../assets/add-icon.png')} />
		</StyledHeader>
	)
})

export default Header
