import HeaderButton from "../HeaderButton/HeaderButton";
import IconButton from "../IconButton/IconButton";
import { StyledHeader } from "./Header.styled";
import { memo } from "react";

const Header: React.FC = memo(() => {
	return (
		<StyledHeader>
			<IconButton iconPath={require('../../assets/schedules-icon.png')} />
			<HeaderButton id={0}>Пн</HeaderButton>
			<HeaderButton id={1}>Вт</HeaderButton>
			<HeaderButton id={2}>Ср</HeaderButton>
			<HeaderButton id={3}>Чт</HeaderButton>
			<HeaderButton id={4}>Пт</HeaderButton>
			<HeaderButton id={5}>Сб</HeaderButton>
			<IconButton iconPath={require('../../assets/add-icon.png')} />
		</StyledHeader>
	)
})

export default Header
