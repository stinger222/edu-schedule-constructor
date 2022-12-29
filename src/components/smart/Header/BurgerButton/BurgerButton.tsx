import { StyledBurgerButton } from "./BurgerButton.styled"

interface IProps {
	style?: React.CSSProperties
	onClick?: React.MouseEventHandler<HTMLDivElement>
}

const BurgerButton: React.FC<IProps> = ({ style, onClick }) => {
	return (
		<StyledBurgerButton style={style} onClick={onClick}>
			<div className="burger-line"></div>
			<div className="burger-line"></div>
			<div className="burger-line"></div>
		</StyledBurgerButton>
	)
}

export default BurgerButton
