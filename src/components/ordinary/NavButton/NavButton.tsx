import { StyledNavButton } from "./NavButton.styled"

interface IProps {
	caption: string,
	day: string,
	index: number,
	selectedDayIndex: number,
	onSelect: (index: number) => void
}

const NavButton: React.FC<IProps> = ({ caption, day, selectedDayIndex, index, onSelect }) => {
	return (
		<StyledNavButton
			className={selectedDayIndex === index ? 'selected' : ''}
			onClick={() => onSelect(index)}
		>
			<div className="caption">{caption}</div>
			<div className="day">{day}</div>
		</StyledNavButton>
	)
}

export default NavButton
