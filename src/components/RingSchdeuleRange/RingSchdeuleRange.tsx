import Input from "../Input/Input"
import { StyledRingSchdeuleRange } from "./RingSchdeuleRange.styled"

interface IProps {
	index: number
}

const RingSchdeuleRange: React.FC<IProps> = ({ index }) => {
	return (
		<StyledRingSchdeuleRange>
			<Input
				caption="Начало"
				className="from"
				type="time"
			/>

			<div>
				<h2>Пара {index}</h2>
			</div>

			<Input
				caption="Конец"
				className="to"
				type="time"
			/>

		</StyledRingSchdeuleRange>
	)	
}

export default RingSchdeuleRange
