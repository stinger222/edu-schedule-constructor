import { useEffect, useRef, useState } from "react";
import HeaderButton from "../HeaderButton/HeaderButton";
import IconButton from "../IconButton/IconButton";
import { StyledHeader } from "./Header.styled";

 const Header: React.FC = () => {
	return (
		<StyledHeader>
			<IconButton
				iconPath={require('../../assets/schedules-icon.png')}
			/>
			<HeaderButton active>Пн</HeaderButton>
			<HeaderButton>Вт</HeaderButton>
			<HeaderButton>Ср</HeaderButton>
			<HeaderButton>Чт</HeaderButton>
			<HeaderButton>Пт</HeaderButton>
			{/* <HeaderButton>Сб</HeaderButton> */}
			<IconButton
				iconPath={require('../../assets/add-icon.png')}
			/>
		</StyledHeader>
	)
}

export default Header
