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
				label="Начало"
				name={`ranges.${index}.start` as const}
				rules={{required: true}}
			/>

				<span className="divider">
					<div className="label">{index + 1} пара</div>
					<div className="line"></div>
				</span>

			<InputWrapper
				type="time"
				label="Конец"
				name={`ranges.${index}.end` as const}
				rules={{required: true}}
			/>
		</StyledTimeRange>
	)
}

export default TimeRange