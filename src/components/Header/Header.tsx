import HeaderButton from "../HeaderButton/HeaderButton";
import IconButton from "../IconButton/IconButton";
import { StyledHeader } from "./Header.styled";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../..";
import Menu from "../Menu/Menu";
import { observer } from "mobx-react";

const Header: React.FC = () => {
	const { uiStore } = useContext(StoreContext)

	return <>
		<StyledHeader>
			<Link to='/composed'>
				<IconButton title="Cоставленные расписания" iconPath={require('../../assets/schedules-icon.png')} />
			</Link>
			
			<HeaderButton day="mon">Пн</HeaderButton>
			<HeaderButton day="tue">Вт</HeaderButton>
			<HeaderButton day="wed">Ср</HeaderButton>
			<HeaderButton day="thu">Чт</HeaderButton>
			<HeaderButton day="fri">Пт</HeaderButton>
			<HeaderButton day="sat">Сб</HeaderButton>
			
			<IconButton 
				title="Меню"
				iconPath={require('../../assets/add-icon.png')}
				onClick={() => uiStore.toggleMenu()}
			/>
			{ uiStore.isMenuOpen && <Menu /> }
		</StyledHeader>
	</>
}

export default observer(Header)
