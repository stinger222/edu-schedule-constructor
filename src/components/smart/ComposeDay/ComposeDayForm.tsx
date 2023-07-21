import React, { useEffect, useState, useContext } from "react"
import { StoreContext } from "../../.."
import { useFieldArray, UseFieldArrayRemove, useFormContext } from "react-hook-form"

import GhostButton from "../../ui/GhostButton/GhostButton"
import SelectContainer from "../../containers/SelectContainer/SelectContainer"
import { StyledComposeDayForm } from "./ComposeDayForm.styled"

import { IRingsSchedule } from "../../../core/types/types"
import { WeekDays } from "../../../core/utils/dateTimeUtils"
import { validateField } from "../../../core/utils/stringUtils"


interface IProps {
	dayIndex: number
}

const ComposeDayForm: React.FC<IProps> = ({ dayIndex }) => {

  const methods = useFormContext()
	const { lessonsStore, ringsSchedulesStore } = useContext(StoreContext)

  const selectedRingsScheduleId: string = methods.watch(`days.${dayIndex}.ringsScheduleId`)
	
  const { fields, append: appendLessonId, remove: removeLessonId } = useFieldArray({
    control: methods.control, name: `days.${dayIndex}.lessonIds`
  })

  const [canAddNewLessons, setCanAddNewLessons] = useState(false)
	
	const ringsSchedulesSelectData = ringsSchedulesStore.ringsSchedules
		.map((schedule: IRingsSchedule) => {
			return {
				label: schedule.name, value: schedule.uid
			}
		})

	const lessonsSelectData = lessonsStore._lessons
		.map((lesson) => {
			return {
				label: lesson.title, value: lesson.uid
			}
		})


  useEffect(() => {
    const selectedRingsSchedule = ringsSchedulesStore.ringsSchedules.find(s => (
      s.uid === selectedRingsScheduleId
    ))

    
    
    const lessonsInsideSelectedRingsSchedule = selectedRingsSchedule?.rings?.length || 1

    console.log("lessonsInsideSelectedRingsSchedule", lessonsInsideSelectedRingsSchedule)
    console.log("fields.length", fields.length)
    
    if (fields.length < lessonsInsideSelectedRingsSchedule) {
      setCanAddNewLessons(true)
    } else {
      setCanAddNewLessons(false)
    }
  }, [selectedRingsScheduleId, fields.length])


	if (dayIndex >= 5) return null
	
	return (
		<StyledComposeDayForm>
			<h2>{WeekDays.getFull()[dayIndex]}:</h2>

			<div className="compose-day">
				<SelectContainer
					key={0}
					name={`days.${dayIndex}.ringsScheduleId`}
					rules={{validate: validateField}}
					label="Расписание звонков для этого дня"
					data={ringsSchedulesSelectData}
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
						/>
					))
				}

				<br />

				{ canAddNewLessons &&  fields.length < 9 &&
					<GhostButton onClick={() => appendLessonId("undefined")}>
						Добавить {fields.length + 1}-ую пару
					</GhostButton>
				}
			</div>
		</StyledComposeDayForm>
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

export default ComposeDayForm