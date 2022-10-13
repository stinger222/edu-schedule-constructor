import HeaderButton from "../HeaderButton/HeaderButton";
import IconButton from "../IconButton/IconButton";
import { StyledHeader } from "./Header.styled";

 const Header: React.FC = () => {
	return (
		<StyledHeader>
			<IconButton
				iconPath={require('../../assets/schedules-icon.png')}
			/>
			<HeaderButton id={1}>Пн</HeaderButton>
			<HeaderButton id={2}>Вт</HeaderButton>
			<HeaderButton id={3}>Ср</HeaderButton>
			<HeaderButton id={4}>Чт</HeaderButton>
			<HeaderButton id={5}>Пт</HeaderButton>
			{/* <HeaderButton id={6}>Сб</HeaderButton> */}
			<IconButton
				iconPath={require('../../assets/add-icon.png')}
			/>
		</StyledHeader>
	)
}

export default Header
