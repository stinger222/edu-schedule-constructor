import { ReactNode } from "react"
import { StyledGhostButton } from "./GhostButton.styled"

interface IProps {
	children: ReactNode,
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const GhostButton = ({ children, onClick }: IProps) => {
	return (
		<StyledGhostButton onClick={onClick} className="btn btn-ghost">
			<span>{ children }</span>
		</StyledGhostButton>
	)
}

export default GhostButton
