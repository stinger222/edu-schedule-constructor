import React, { useContext, useEffect, useState } from "react"
import { UseFieldArrayRemove, useFieldArray, useFormContext } from "react-hook-form"

import { StoreContext } from "../../.."
import { ILessonsStore, IRingsSchedulesStore } from "../../../core/types/store"
import { IRingsSchedule } from "../../../core/types/types"
import { WeekUtils } from "../../../core/utils/dateTimeUtils"
import { validateField } from "../../../core/utils/stringUtils"

import SelectContainer from "../../containers/SelectContainer/SelectContainer"
import GhostButton from "../../ui/GhostButton/GhostButton"

import { StyledComposeDayForm } from "./ComposeDayForm.styled"
import { useTranslation } from "react-i18next"


interface IProps {
	dayIndex: number
}

const ComposeDayForm: React.FC<IProps> = ({ dayIndex }) => {
  const [canAddNewLessons, setCanAddNewLessons] = useState(false)
	const { lessonsStore, ringsSchedulesStore } = useContext(StoreContext)
  
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage as "ru" | "en"
  
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

  // Prevents user from adding more lessons than described in selected rings schedule
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
			<h2>{WeekUtils.getFull(lang)[dayIndex]}:</h2>

			<div className="compose-day">
				<SelectContainer
					data={getRingsSchedulesSelectData(ringsSchedulesStore)}
					name={`days.${dayIndex}.ringsScheduleId`}
					label={t("composeScheduleForm.ringsSchForThisDayInputCaption")}
					rules={{validate: validateField}}
					key={0}
				/>

				<div className="fade-divider"></div>

				{
					fields.map(({id}, index) => (
						<SelectContainer
              data={getLessonsSelectData(lessonsStore)}
              name={`days.${dayIndex}.lessonIds.${index}`}
              label={t("composeScheduleForm.nthLessonSelectCaption", {value: index + 1})}
              rules={{validate: validateField}}
              rightSection={getRightSection(index)}
							key={id}
						/>
					))
				}

				<br />

				{ canAddNewLessons &&  fields.length < 9 &&
					<GhostButton onClick={() => appendLessonId("undefined")}>
            {t("ghostButton.addNthLesson", {value: fields.length + 1})}
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

// Same
const getLessonsSelectData = (lessonsStore: ILessonsStore) => {
  return lessonsStore._lessons.map((lesson) => ({
      label: lesson.title, value: lesson.uid
  }))
}
