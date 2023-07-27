import React, { useContext, useEffect, useState } from "react"
import { UseFieldArrayRemove, useFieldArray, useFormContext } from "react-hook-form"
import { StoreContext } from "../../.."

import SelectContainer from "../../containers/SelectContainer/SelectContainer"
import GhostButton from "../../ui/GhostButton/GhostButton"
import { StyledComposeDayForm } from "./ComposeDayForm.styled"

import { ILessonsStore, IRingsSchedulesStore } from "../../../core/types/store"
import { IRingsSchedule } from "../../../core/types/types"
import { validateField } from "../../../core/utils/stringUtils"
import { WeekDays } from "../../../core/utils/dateTimeUtils"


interface IProps {
	dayIndex: number
}

const ComposeDayForm: React.FC<IProps> = ({ dayIndex }) => {

  const [canAddNewLessons, setCanAddNewLessons] = useState(false)
	const { lessonsStore, ringsSchedulesStore } = useContext(StoreContext)
  
  const methods = useFormContext()
  const { fields, append: appendLessonId, remove: removeLessonId } = useFieldArray({
    control: methods.control, name: `days.${dayIndex}.lessonIds`
  })

  const selectedRingsScheduleId: string = methods.watch(`days.${dayIndex}.ringsScheduleId`)

  // Prevents user from adding more lessons that described in selected rings schedule.
  useEffect(() => {
    const selectedRingsSchedule = ringsSchedulesStore.ringsSchedules.find(s => (
      s.uid === selectedRingsScheduleId
    ))

    const ringsInSelectedRingsSchedule = selectedRingsSchedule?.rings?.length || 1

    if (fields.length < ringsInSelectedRingsSchedule) {
      setCanAddNewLessons(true)
    } else {
      setCanAddNewLessons(false)
    }
  }, [selectedRingsScheduleId, fields.length]) // On new rings schedule selet or addition of new lesson. 

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
					data={getRingsSchedulesSelectData(ringsSchedulesStore)}
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
							data={getLessonsSelectData(lessonsStore)}
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

export default ComposeDayForm


interface IRemoveFieldButtonProps {
  index: number;
  remove: UseFieldArrayRemove;
}

const RemoveFieldButton = ({ index, remove }: IRemoveFieldButtonProps) => {
	return (
		<button className="btn custom-select-clear" onClick={() => remove(index)}>×</button>
	)
}


// Takes necessary data from the store, and returns it in the format that Mantine Select component demand
const getRingsSchedulesSelectData = (ringsSchedulesStore: IRingsSchedulesStore) => {
  return ringsSchedulesStore.ringsSchedules.map((schedule: IRingsSchedule) => ({
      label: schedule.name, value: schedule.uid
  }))
}

// Same shit. And yes, I have no idea how to make it look better, sry
const getLessonsSelectData = (lessonsStore: ILessonsStore) => {
  return lessonsStore._lessons.map((lesson) => ({
      label: lesson.title, value: lesson.uid
  }))
}