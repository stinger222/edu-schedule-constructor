import Input from "../../ui/Input/Input"
import { StyledTimeRange } from "./TimeRange.styled"

interface IProps {
	index: number
}

const TimeRange: React.FC<IProps> = ({ index }) => {
	return (
		<StyledTimeRange>
			<Input type="time"/>
				<span className="divider">
					<div className="caption">{index} пара</div>
					<div className="line"></div>
				</span>
			<Input type="time"/>
		</StyledTimeRange>
	)
}

export default TimeRange
