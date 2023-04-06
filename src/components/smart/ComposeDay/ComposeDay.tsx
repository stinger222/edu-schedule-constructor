import React, { useContext } from "react"
import { StoreContext } from "../../.."
import { useFieldArray, UseFieldArrayRemove, useFormContext } from "react-hook-form"

import GhostButton from "../../ui/GhostButton/GhostButton"
import SelectContainer from "../../containers/SelectContainer/SelectContainer"
import { StyledComposeDay } from "./ComposeDay.styled"

import { WeekDays } from "../../../core/utils/helpers"
import { IRingsSchedule } from "../../../core/types/types"

interface IProps {
	dayIndex: number
}

const ComposeDay: React.FC<IProps> = ({ dayIndex }) => {

	const { lessonsStore, ringsSchedulesStore } = useContext(StoreContext)

	const ringsSchedulesSelectData = ringsSchedulesStore.ringsSchedules
		.map((schedule: IRingsSchedule) => {
			return {
				label: schedule.name, value: schedule.uid
			}
		})

	const lessonsSelectData = lessonsStore.lessons
		.map((lesson) => {
			return {
				label: lesson.title, value: lesson.uid
			}
		})

	const methods = useFormContext()
	
	const {
		fields, append: appendLessonId, remove: removeLessonId
	} = useFieldArray({control: methods.control, name: `days.${dayIndex}.lessonIds`})
	
	const validateField = (value: string) => {
		value = value.trim()
		return value !== '' && value !== 'undefined'
	}
	
	if (dayIndex >= 5) return null
	
	return (
		<StyledComposeDay>
			<h2>{WeekDays.getFull()[dayIndex]}:</h2>

			<div className="compose-day">
				<SelectContainer
					key={0}
					name={`days.${dayIndex}.ringsScheduleId`}
					rules={{validate: validateField}}
					label="Расписание звонков для этого дня"
					data={ringsSchedulesSelectData}
					defaultValue={ringsSchedulesStore.ringsSchedules[0].uid}
				/>

				<div className="hr-divider"></div>

				{
					fields.map(({id}, index) => (
						<SelectContainer
							rightSection= {
								(fields.length - 1 === index && index != 0) && 
									<RemoveFieldButton index={index} remove={removeLessonId}/>
							}
							key={id}
							name={`days.${dayIndex}.lessonIds.${index}`}
							rules={{validate: validateField}}
							label={`${index + 1}-ая пара`}
							data={lessonsSelectData}
							defaultValue={lessonsStore.lessons[0].uid}
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