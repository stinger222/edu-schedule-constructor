import Input from "../../ui/Input/Input"
import { StyledTimeRange } from "./TimeRange.styled"

interface IProps {
	index: number
}

const TimeRange: React.FC<IProps> = ({ index }) => {
	return (
		<StyledTimeRange>
			<Input
				type="time"
				caption="Начало"
				registerName={`ranges.${index}.start`}
				registerOptions={{required: true}}
			/>

				<span className="divider">
					<div className="caption">{index + 1} пара</div>
					<div className="line"></div>
				</span>

			<Input
				type="time"
				caption="Конец"
				registerName={`ranges.${index}.end`}
				registerOptions={{required: true}}
			/>
		</StyledTimeRange>
	)
}

export default TimeRange