import StyledBreakCard from "./BreakCard.styled"
import { ReactComponent as RunIcon } from "../../assets/run-icon.svg"

interface IProps {
	startTime: string | undefined,
	endTime: string | undefined
}

const BreakCard: React.FC<IProps> = ({ startTime, endTime}) => {	
	if (!startTime || !endTime)	return <></>

	const _startTime = startTime.split(':')
	const _endTime = endTime.split(':')

	const startDate = new Date()
	const endDate = new Date()

	startDate.setHours(+_startTime[0])
	startDate.setMinutes(+_startTime[1])
	
	endDate.setHours(+_endTime[0])
	endDate.setMinutes(+_endTime[1])

	const difference = (endDate.getTime() / 1000 - startDate.getTime() / 1000) / 60


	return (
		<StyledBreakCard>
			<RunIcon />
			<span>Перемена {difference} минут</span>
			{startTime} - {endTime}
		</StyledBreakCard>
	)
}

export default BreakCard
