import { useContext } from "react"
import { StoreContext } from "../.."

import { useForm, useFieldArray, FormProvider } from "react-hook-form"
import { StyledAddRingsSchedulePage } from "./AddRingsSchedulePage.styled"
import { toJS } from "mobx"

import Icon from "../../components/ordinary/Icon/Icon"
import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import TimeRange from "../../components/ordinary/TimeRange/TimeRange"
import Container from "../../components/containers/Container/Container"
import InputWrapper from "../../components/containers/InputContainer/InputContainer"
import { validateField } from "../../core/utils/stringUtils"
import { useTranslation } from "react-i18next"

const AddRingsSchedulePage = () => {

  const { t } = useTranslation()
	const { ringsSchedulesStore } = useContext(StoreContext)

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

	const handleSubmit = (formData: any) => {
		ringsSchedulesStore.addSchedule({
			name: formData.name.trim() || `Расписание №${ringsSchedulesStore.ringsSchedules.length+1}`,
			rings: [...formData.rings]
		})

		console.log(toJS(ringsSchedulesStore.ringsSchedules))
		methods.reset()
	}

	const { append, fields } = useFieldArray({control: methods.control, name: "rings"})

	return (
		<StyledAddRingsSchedulePage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> {t("headerTitle.addRingsSchedule")} </h1>
          {/* <h1>{routeState?.mode === "edit" ? t("headerTitle.editRingsSchedule") : t("headerTitle.ringsPage")}</h1> */}
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

						<Button type="submit" disabled={!methods.formState.isValid}> {t("button.submit")} </Button>
					</form>
				</FormProvider>

			</Container>
		</StyledAddRingsSchedulePage>
	)
}

export default AddRingsSchedulePage