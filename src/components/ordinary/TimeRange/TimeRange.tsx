import { useFormContext } from "react-hook-form"
import Input from "../../ui/Input/Input"
import InputWrapper from "../../wrappers/InputWrapper/InputWrapper"
import { StyledTimeRange } from "./TimeRange.styled"

interface IProps {
	index: number
}

const TimeRange: React.FC<IProps> = ({ index }) => {
	const { register } = useFormContext()

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

			<input type="time" {...register(`ranges.${index}.end` as const || 'value' , {required: true})}/>
			{/* <InputWrapper
				type="time"
				caption="Конец"
				registerName={`ranges.${index}.end` as const}
				registerOptions={{required: true}}
			/> */}
		</StyledTimeRange>
	)
}

export default TimeRange