import { StyledBurgerButton } from "./BurgerButton.styled"

interface IProps {
	
}

const BurgerButton: React.FC<IProps> = ({  }) => {
	return (
		<StyledBurgerButton>
			<div className="burger-line"></div>
			<div className="burger-line"></div>
			<div className="burger-line"></div>
		</StyledBurgerButton>
	)
}

export default BurgerButton
