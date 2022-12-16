import { StyledNavButton } from "./NavButton.styled"

interface IProps {
	caption: string,
	date: string,
	index: number,
	selectedDayIndex: number,
	onSelect: (index: number) => void
}

const NavButton: React.FC<IProps> = ({ caption, date, selectedDayIndex, index, onSelect }) => {
	return (
		<StyledNavButton
			className={selectedDayIndex === index ? 'selected' : ''}
			onClick={() => onSelect(index)}
		>
			<div className="caption">{caption}</div>
			<div className="day">{date}</div>
		</StyledNavButton>
	)
}

export default NavButton
