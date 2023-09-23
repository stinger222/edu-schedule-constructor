import React, { useContext, useEffect, useState } from "react"
import { UseFieldArrayRemove, useFieldArray, useFormContext } from "react-hook-form"

import { StoreContext } from "../../.."
import { IClassesStore, IClassSchedulesStore } from "../../../core/types/store"
import { IAssembledDay, IAssembledSchedule, IClassSchedule } from "../../../core/types/types"
import { WeekUtils } from "../../../core/utils/dateTimeUtils"
import { validateField } from "../../../core/utils/stringUtils"

import SelectContainer from "../../containers/SelectContainer/SelectContainer"
import GhostButton from "../../ui/GhostButton/GhostButton"

import { StyledAssembleDayForm } from "./AssembleDayForm.styled"
import { useTranslation } from "react-i18next"


interface IProps {
	dayIndex: number
}

const AssembleDayForm = ({ dayIndex }: IProps) => {
  const [canAddNewClasses, setCanAddNewClasses] = useState(false)
	const { classesStore, classSchedulesStore } = useContext(StoreContext)
  
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage as "ru" | "en"
  
  const methods = useFormContext()
  const { fields, append: appendClassId, remove: removeClassId } = useFieldArray({
    control: methods.control, name: `days.${dayIndex}.classIds`
  })

  const selectedClassScheduleId: string = methods.watch(`days.${dayIndex}.classScheduleId`)

  const getRightSection = (index: number) => {
    if (fields.length - 1 === index && index != 0) {
      return <RemoveFieldButton index={index} remove={removeClassId}/>
    }
  }

  // Prevents user from submitting form if there is more classes than described in selected class schedule
  const validateClassFileds = (value: string, formValues: IAssembledSchedule): boolean => {
    const isValid = validateField(value) && formValues.days.every((day: IAssembledDay) => {
      const maxClassesCountForThisDay = classSchedulesStore.getById(day.classScheduleId)?.classes.length || 0
      return maxClassesCountForThisDay >= day.classIds.length
    })

    return isValid
  }

  // Prevents user from adding more classes than described in selected class schedule
  useEffect(() => {
    const selectedClassSchedule = classSchedulesStore.classSchedules.find(s => (
      s.uid === selectedClassScheduleId
    ))

    const classesInSelectedClassSchedule = selectedClassSchedule?.classes?.length || 1

    if (fields.length < classesInSelectedClassSchedule) {
      setCanAddNewClasses(true)
    } else {
      setCanAddNewClasses(false)
    }
  }, [selectedClassScheduleId, fields.length]) // On new class schedule select or addition of new class

	if (dayIndex >= 5) return null
	
	return (
		<StyledAssembleDayForm>
			<h2>{WeekUtils.getFull(lang)[dayIndex]}:</h2>

			<div className="assemble-day">
				<SelectContainer
					data={getClassSchedulesSelectData(classSchedulesStore)}
					name={`days.${dayIndex}.classScheduleId`}
					label={t("assembleScheduleForm.classSchForThisDayInputCaption")}
					rules={{validate: validateField}}
					key={0}
				/>

				<div className="fade-divider"></div>

				{
					fields.map(({id}, index) => (
						<SelectContainer
              data={getClassesSelectData(classesStore)}
              name={`days.${dayIndex}.classIds.${index}`}
              label={t("assembleScheduleForm.nthClassSelectCaption", {value: index + 1})}
              rules={{validate: validateClassFileds}}
              rightSection={getRightSection(index)}
							key={id}
						/>
					))
				}

				<br />

				{ canAddNewClasses &&  fields.length < 9 &&
					<GhostButton onClick={() => appendClassId("undefined")}>
            {t("ghostButton.addNthClass", {value: fields.length + 1})}
					</GhostButton>
				}
			</div>
		</StyledAssembleDayForm>
	)
}

export default AssembleDayForm


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
const getClassSchedulesSelectData = (classSchedulesStore: IClassSchedulesStore) => {
  return classSchedulesStore.classSchedules.map((schedule: IClassSchedule) => ({
      label: schedule.name, value: schedule.uid
  }))
}

// Same
const getClassesSelectData = (classesStore: IClassesStore) => {
  return classesStore._classes.map((cls) => ({
      label: cls.title, value: cls.uid
  }))
}
