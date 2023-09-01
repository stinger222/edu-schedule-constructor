import React, { useContext, useEffect, useState } from "react"
import { UseFieldArrayRemove, useFieldArray, useFormContext } from "react-hook-form"

import { StoreContext } from "../../.."
import { ILessonsStore, IRingsSchedulesStore } from "../../../core/types/store"
import { IRingsSchedule } from "../../../core/types/types"
import { WeekDays } from "../../../core/utils/dateTimeUtils"
import { validateField } from "../../../core/utils/stringUtils"

import SelectContainer from "../../containers/SelectContainer/SelectContainer"
import GhostButton from "../../ui/GhostButton/GhostButton"

import { StyledComposeDayForm } from "./ComposeDayForm.styled"


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

  const getRightSection = (index: number) => {
    if (fields.length - 1 === index && index != 0) {
      return <RemoveFieldButton index={index} remove={removeLessonId}/>
    }
  }

  // Prevents user from adding more lessons that described in selected rings schedule
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
  }, [selectedRingsScheduleId, fields.length]) // On new rings schedule select or addition of new lesson

	if (dayIndex >= 5) return null
	
	return (
		<StyledComposeDayForm>
			<h2>{WeekDays.getFull()[dayIndex]}:</h2>

			<div className="compose-day">
				<SelectContainer
					data={getRingsSchedulesSelectData(ringsSchedulesStore)}
					name={`days.${dayIndex}.ringsScheduleId`}
					label="Расписание звонков для этого дня"
					rules={{validate: validateField}}
					key={0}
				/>

				<div className="hr-divider"></div>

				{
					fields.map(({id}, index) => (
						<SelectContainer
              data={getLessonsSelectData(lessonsStore)}
              name={`days.${dayIndex}.lessonIds.${index}`}
              label={`${index + 1}-ая пара`}
              rules={{validate: validateField}}
              rightSection={getRightSection(index)}
							key={id}
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
