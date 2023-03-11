import { StyledComposeDay } from "./ComposeDay.styled"
import { useFieldArray, useFormContext } from "react-hook-form"

import GhostButton from "../../ui/GhostButton/GhostButton"
import SelectWrapper from "../../wrappers/SelectWrapper/SelectWrapper"
import { weekDaysRus_full } from "../../../core/constants/constants"

interface IProps {
	dayIndex: number
}

const ComposeDay: React.FC<IProps> = ({ dayIndex }) => {
	
	const data = [
		{ label: 'Условная математика', value: "selected-lesson-id-1" },
		{ label: 'Типа английский', value: "selected-lesson-id-2"  },
		{ label: 'Ну предположим физра', value: "selected-lesson-id-3"  },
		{ label: 'Допустим информатика', value: "selected-lesson-id-4"  },
	]

	const methods = useFormContext()
	
	const { fields, append:appendLessonId } = useFieldArray({control: methods.control, name: `days.${dayIndex}.lessonIds` })

	
	if (dayIndex >= 5) return null

	return (
		<StyledComposeDay>
			<h2>{weekDaysRus_full[dayIndex]}:</h2>

			<div className="compose-day">
				<SelectWrapper
					registerName={`days.${dayIndex}.ringsScheduleId`}
					index={0}
					key={0}
					label="Расписание звонков для этого дня"
					data={[{label: 'Звонки для понедельника', value: '1'}, {label: 'Нормальные звонки', value: '2'}]}
				/>

				<div className="hr-divider"></div>

				{
					fields.map((_, index) => (
						<SelectWrapper
							registerName={`days.${dayIndex}.lessonIds.${index}`}
							index={index + 1}
							key={index + 1}
							label={`${index + 1}-ая пара`}
							data={data}
						/>
					))
				}

				<br />

				<GhostButton onClick={() => appendLessonId('appended-lesson-id-??')}>Добавить {fields.length + 1}-ую пару</GhostButton>
			</div>

		</StyledComposeDay>
	)
}

export default ComposeDay
