import { StyledNavButton } from "./NavButton.styled"

interface IProps {
	label: string,
	date: string,
	index: number,
	selectedDayIndex: number,
	onSelect: (index: number) => void
}

const NavButton: React.FC<IProps> = ({ label, date, selectedDayIndex, index, onSelect }) => {
	return (
		<StyledNavButton
			className={selectedDayIndex === index ? 'selected' : ''}
			onClick={() => onSelect(index)}
		>
			<div className="label">{label}</div>
			<div className="day">{date}</div>
		</StyledNavButton>
	)
}

export default NavButton
