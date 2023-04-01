import { StyledComposeDay } from "./ComposeDay.styled"
import { useFieldArray, UseFieldArrayRemove, useFormContext } from "react-hook-form"

import GhostButton from "../../ui/GhostButton/GhostButton"
import SelectContainer from "../../containers/SelectContainer/SelectContainer"
import { WeekDays } from "../../../core/utils/helpers"

interface IProps {
	dayIndex: number
}

const ComposeDay: React.FC<IProps> = ({ dayIndex }) => {

	const data = [
		{ label: 'Условная математика', value: "math" },
		{ label: 'Типа английский', value: "eng"  },
		{ label: 'Ну предположим физра', value: "pe"  },
		{ label: 'Допустим информатика', value: "cs"  },
	]

	const methods = useFormContext()
	
	const {
		fields, append: appendLessonId, remove: removeLessonId
	} = useFieldArray({control: methods.control, name: `days.${dayIndex}.lessonIds` })

	
	if (dayIndex >= 5) return null
	
	return (
		<StyledComposeDay>
			<h2>{WeekDays.getFull()[dayIndex]}:</h2>

			<div className="compose-day">
				<SelectContainer
					name={`days.${dayIndex}.ringsScheduleId`}
					key={0}
					label="Расписание звонков для этого дня"
					data={[{label: 'Звонки для понедельника', value: '1'}, {label: 'Нормальные звонки', value: '2'}]}
				/>

				<div className="hr-divider"></div>

				{
					fields.map(({id}, index) => (
						<SelectContainer
							rightSection= {
								(fields.length - 1 === index && index != 0) && <RemoveFieldButton index={index} remove={removeLessonId} />
							}
							name={`days.${dayIndex}.lessonIds.${index}`}
							key={id}
							label={`${index + 1}-ая пара`}
							data={data}
						/>
					))
				}

				<br />

				{ fields.length < 9 &&
					<GhostButton onClick={() => appendLessonId('undefined')}>
						Добавить {fields.length + 1}-ую пару
					</GhostButton>
				}
			</div>
		</StyledComposeDay>
	)
}

interface IRemoveFieldButtonProps {
  index: number;
  remove: UseFieldArrayRemove;
}

const RemoveFieldButton = ({index, remove}: IRemoveFieldButtonProps) => {
	return (
		<button className="btn custom-select-clear" onClick={() => remove(index)}>×</button>
	)
}

export default ComposeDay