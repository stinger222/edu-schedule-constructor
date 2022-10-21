import { ReactNode } from "react"
import { StyledComposedScheduleCard } from "./ComposedScheduleCard.styled"

interface IProps {
	children?: ReactNode
	name: string,
	
}

const ComposedSchedule: React.FC<IProps> = ({ children }) => {
	return (
		<StyledComposedScheduleCard>
			{children}
		</StyledComposedScheduleCard>
	)
}

export default ComposedSchedule
