import { ReactNode } from "react"
import { StyledGhostButton } from "./GhostButton.styled"

interface IProps {
	children: ReactNode,
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const GhostButton: React.FC<IProps> = ({ children, onClick }) => {
	return (
		<StyledGhostButton onClick={onClick} className="btn">
			{ children }
		</StyledGhostButton>
	)
}

export default GhostButton