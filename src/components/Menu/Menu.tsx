import { useContext, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { StoreContext } from "../.."
import { StyledMenu } from "./Menu.styled"



const Menu = () => {
	const { uiStore } = useContext(StoreContext)
	const menuRef = useRef<HTMLDivElement>(null) 

	useEffect(() => {
		const handleClick = (e) => {
			if (!menuRef.current.contains(e.target)) {
				uiStore.toggleMenu()
			}
		}
		
		document.addEventListener('click', handleClick)
		return () => document.removeEventListener('click', handleClick)
	}) 
	return (
		<StyledMenu ref={menuRef}>
			<h1>Меню</h1>
				<Link
					to="/rings"
					onClick={() => uiStore.toggleMenu(false)}
					className="menu_button"
				>Расписания звонков</Link>

				<Link
					to="/lessons"
					onClick={() => uiStore.toggleMenu(false)}
					className="menu_button"
				>Список предметов</Link>
		</StyledMenu>
	)
}

export default Menu
