import { StyledActionButton } from "./ActionButton.styled"

const ActionButton = ({ type, className, children }) => {
	return (
		<StyledActionButton type={type} className={className}>
			{ children }
		</StyledActionButton>
	)
}

export default ActionButton
