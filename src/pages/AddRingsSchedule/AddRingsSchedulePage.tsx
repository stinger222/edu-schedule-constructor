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

import { IRingsSchedule } from "../../core/types/types"
import { validateField } from "../../core/utils/stringUtils"
import useInitializeFormForEditMode from "../../core/hooks/useInitializeFormForEditMode"

import { StyledAddRingsSchedulePage } from "./AddRingsSchedulePage.styled"


const AddRingsSchedulePage = () => {

  const { t } = useTranslation()
	const { ringsSchedulesStore } = useContext(StoreContext)

  const routeState = useLocation().state
  const navigate = useNavigate()

	const methods = useForm({
		defaultValues: {
			name: "",
			rings: [
				{
					start: "08:40",
					end: "10:00"
				}
			]
		}
	})

  const { append, fields } = useFieldArray({control: methods.control, name: "rings"})
  
	const handleSubmit = (formData: Omit<IRingsSchedule, "uid">) => {
    if (routeState?.mode === "edit") { // TODO: Should this be moved to store?...
      ringsSchedulesStore.removeSchedule(routeState.uid)
      ringsSchedulesStore.addSchedule(formData, routeState.uid)
    } else {
      ringsSchedulesStore.addSchedule(formData)
    }

		methods.reset()
    navigate(-1)
	}

  useInitializeFormForEditMode<IRingsSchedule>(ringsSchedulesStore.ringsSchedules, routeState, methods)

	return (
		<StyledAddRingsSchedulePage>
			<Container>
				<Header>
					<Header.NavHome/>
          <h1>{routeState?.mode === "edit" ? t("headerTitle.editRingsSchedule") : t("headerTitle.addRingsSchedule")}</h1>
					<Header.BurgerButton/>
				</Header>

				<FormProvider {...methods}>
					<form onSubmit={ methods.handleSubmit(handleSubmit) }>
						<InputWrapper
							name="name"
							label={t("addRingsScheduleForm.schNameInputCaption")}
							placeholder={t("addRingsScheduleForm.schNameInputPlaceholder")}
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
		</StyledAddRingsSchedulePage>
	)
}

export default AddRingsSchedulePage