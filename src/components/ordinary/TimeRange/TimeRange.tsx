import { StyledTimeRange } from "./TimeRange.styled"
import InputWrapper from "../../containers/InputContainer/InputContainer"

interface IProps {
	index: number
}

const TimeRange: React.FC<IProps> = ({ index }) => {
	return (
		<StyledTimeRange>
			<InputWrapper
				type="time"
				caption="Начало"
				registerName={`ranges.${index}.start` as const}
				registerOptions={{required: true}}
			/>

				<span className="divider">
					<div className="caption">{index + 1} пара</div>
					<div className="line"></div>
				</span>

			<InputWrapper
				type="time"
				caption="Конец"
				registerName={`ranges.${index}.end` as const}
				registerOptions={{required: true}}
			/>
		</StyledTimeRange>
	)
}

export default TimeRange