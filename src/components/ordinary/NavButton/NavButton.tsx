import { StyledNavButton } from "./NavButton.styled"

interface IProps {
	caption: string,
	day: string
}

const NavButton: React.FC<IProps> = ({ caption, day }) => {
	return (
		<StyledNavButton>
			<div className="caption">{caption}</div>
			<div className="day">{day}</div>
		</StyledNavButton>
	)
}

export default NavButton
