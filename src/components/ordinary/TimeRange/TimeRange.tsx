import Input from "../../ui/Input/Input"
import { StyledTimeRange } from "./TimeRange.styled"

interface IProps {
	index: number
}

const TimeRange: React.FC<IProps> = ({ index }) => {
	return (
		<StyledTimeRange>
			<Input type="time" caption="Начало"/>
				<span className="divider">
					<div className="caption">{index} пара</div>
					<div className="line"></div>
				</span>
			<Input type="time" caption="Конец"/>
		</StyledTimeRange>
	)
}

export default TimeRange
