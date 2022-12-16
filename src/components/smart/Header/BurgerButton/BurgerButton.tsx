import { StyledBurgerButton } from "./BurgerButton.styled"

interface IProps {
	style?: React.CSSProperties
}

const BurgerButton: React.FC<IProps> = ({ style }) => {
	return (
		<StyledBurgerButton style={style}>
			<div className="burger-line"></div>
			<div className="burger-line"></div>
			<div className="burger-line"></div>
		</StyledBurgerButton>
	)
}

export default BurgerButton
