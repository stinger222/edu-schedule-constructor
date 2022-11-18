import { StyledActionButton } from "./ActionButton.styled"

interface IProps {
  type?: "button" | "submit" | "reset",
  className?: string,
  onClick?: any,
  children?: any
}

const ActionButton: React.FC<IProps> = ({ type, className, onClick, children }) => {
	return (
		<StyledActionButton onClick={onClick} type={type} className={className}>
			{ children }
		</StyledActionButton>
	)
}

export default ActionButton
