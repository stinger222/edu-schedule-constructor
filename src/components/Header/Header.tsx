import HeaderButton from "../HeaderButton/HeaderButton";
import IconButton from "../IconButton/IconButton";
import { StyledHeader } from "./Header.styled";
import { memo } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = memo(() => {
	return (
		<StyledHeader>
			<Link to='/composed'>
				<IconButton title="Список составленных расписаний" iconPath={require('../../assets/schedules-icon.png')} />
			</Link>
			
			<HeaderButton id={0}>Пн</HeaderButton>
			<HeaderButton id={1}>Вт</HeaderButton>
			<HeaderButton id={2}>Ср</HeaderButton>
			<HeaderButton id={3}>Чт</HeaderButton>
			<HeaderButton id={4}>Пт</HeaderButton>
			<HeaderButton id={5}>Сб</HeaderButton>
			<IconButton title="Меню" iconPath={require('../../assets/add-icon.png')} />
		</StyledHeader>
	)
})

export default Header
