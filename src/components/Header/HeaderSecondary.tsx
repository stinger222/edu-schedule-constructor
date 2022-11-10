import IconButton from "../IconButton/IconButton";
import { StyledHeader } from "./Header.styled";
import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../..";
import Menu from "../Menu/Menu";
import { observer } from "mobx-react-lite";

const HeaderSecondary = () => {
	const { uiStore } = useContext(StoreContext)
	
	return <>
		<StyledHeader className="secondary">
			<Link to='/composed'>
				<IconButton title="Cоставленные расписания" iconPath={require('../../assets/schedules-icon.png')} />
			</Link>

			<Link to='/'>
				<IconButton title="На главную" iconPath={require('../../assets/home-icon.png')} />
			</Link>
			
			<IconButton
				title="Меню"
				iconPath={require('../../assets/add-icon.png')}
				onClick={(e) => {
					e.stopPropagation()
					uiStore.toggleMenu()
				}}
			/>
			{ uiStore.isMenuOpen && <Menu /> }
		</StyledHeader>

	</>
}

export default observer(HeaderSecondary)
