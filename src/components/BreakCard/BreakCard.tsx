import StyledBreakCard from "./BreakCard.styled"
import { ReactComponent as RunIcon } from "../../assets/run-icon.svg"

interface IProps {
	breakLength: number,
	startTime: string,
	endTime: string
}

const BreakCard: React.FC<IProps> = ({ breakLength, startTime, endTime}) => {
	return (
		<StyledBreakCard>
			<RunIcon />
			<span>Перемена {breakLength} минут</span>
			{startTime} - {endTime}
		</StyledBreakCard>
	)
}

export default BreakCard
