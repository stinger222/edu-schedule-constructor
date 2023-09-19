import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"

import { StoreContext } from "../.."
import Button from "../../components/ui/Button/Button"
import Icon from "../../components/ordinary/Icon/Icon"
import Header from "../../components/smart/Header/Header"
import TimeRange from "../../components/ordinary/TimeRange/TimeRange"
import Container from "../../components/containers/Container/Container"
import InputWrapper from "../../components/containers/InputContainer/InputContainer"

import { IClassSchedule } from "../../core/types/types"
import { validateField } from "../../core/utils/stringUtils"
import useInitializeFormForEditMode from "../../core/hooks/useInitializeFormForEditMode"

import { StyledAddClassSchedulePage } from "./AddClassSchedulePage.styled"


const AddClassSchedulePage = () => {

  const { t } = useTranslation()
	const { classSchedulesStore } = useContext(StoreContext)

  const routeState = useLocation().state
  const navigate = useNavigate()

	const methods = useForm({
		defaultValues: {
			name: "",
			classes: [
				{
					start: "08:40",
					end: "10:00"
				}
			]
		}
	})

  const { append, fields } = useFieldArray({control: methods.control, name: "classes"})
  
	const handleSubmit = (formData: Omit<IClassSchedule, "uid">) => {
    if (routeState?.mode === "edit") { // TODO: Should this be moved to store?...
      classSchedulesStore.removeSchedule(routeState.uid)
      classSchedulesStore.addSchedule(formData, routeState.uid)
    } else {
      classSchedulesStore.addSchedule(formData)
    }

		methods.reset()
    navigate(-1)
	}

  useInitializeFormForEditMode<IClassSchedule>(classSchedulesStore.classSchedules, routeState, methods)

	return (
		<StyledAddClassSchedulePage>
			<Container>
				<Header>
					<Header.NavHome/>
          <h1>{routeState?.mode === "edit" ? t("headerTitle.editClassSchedule") : t("headerTitle.addClassSchedule")}</h1>
					<Header.BurgerButton/>
				</Header>

				<FormProvider {...methods}>
					<form onSubmit={ methods.handleSubmit(handleSubmit) }>
						<InputWrapper
							name="name"
							label={t("addClassScheduleForm.schNameInputCaption")}
							placeholder={t("addClassScheduleForm.schNameInputPlaceholder")}
							rules={{validate: validateField}}
						/>

						{fields.map(({ id }, index) => (
							<TimeRange index={index} key={id}/>
						))}

						{ fields.length < 9
							?
							<Button className="append" onClick={() => append({start: "", end: ""})}>
								<Icon fill="white" name="Plus"/>
							</Button> 
							:
							<div style={{textAlign: "center", fontSize: "1.2em", marginBottom: "1em"}}> а ой))))) 👉👈 </div>
						}

						<Button type="submit" disabled={!methods.formState.isValid}> {t("button.done")} </Button>
					</form>
				</FormProvider>

			</Container>
		</StyledAddClassSchedulePage>
	)
}

export default AddClassSchedulePage