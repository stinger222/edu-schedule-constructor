import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { FormProvider, useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"

import { StoreContext } from "../.." 
import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import InputWrapper from "../../components/containers/InputContainer/InputContainer"

import { IClass } from "../../core/types/types"
import { validateField } from "../../core/utils/stringUtils"
import useInitializeFormForEditMode from "../../core/hooks/useInitializeFormForEditMode"

import { StyledAddClassPage } from "./AddClassPage.styled"


const AddClassPage = () => {
  const { classesStore } = useContext(StoreContext)
  const { t } = useTranslation()

  const navigate = useNavigate()
  const routeState = useLocation().state

	const methods = useForm({defaultValues: {
		title: "",
		teacher: "",
		cabinet: ""
	}})

	const handleSubmit = (formData: Omit<IClass, "uid">) => {
    if (routeState?.mode === "edit") { // TODO: Should this be moved to store?...
      classesStore.removeClass(routeState.uid)
      classesStore.addClass(formData, routeState.uid)
    } else {
      classesStore.addClass(formData)
    }
		methods.reset()
    navigate(-1)
	}

  useInitializeFormForEditMode<IClass>(classesStore.classes, routeState, methods)

	return (
		<StyledAddClassPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1>{routeState?.mode === "edit" ? t("headerTitle.editClass") : t("headerTitle.addClass")}</h1>
					<Header.BurgerButton/>
				</Header>

				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(handleSubmit)}>
						<InputWrapper
							label={t("addClassForm.classNameInputCaption")}
							placeholder={t("addClassForm.classNameInputPlaceholder")}
							name="title"
							rules={{validate: validateField}}
							className="title"
						/>
						<InputWrapper
							label={t("addClassForm.teacherNameInputCaption")}
							placeholder={t("addClassForm.teacherNameInputPlaceholder")}
							name="teacher"
							rules={{validate: validateField}}
							className="teacher"
						/>
						<InputWrapper
							label={t("addClassForm.cabinetInputCaption")}
							placeholder={t("addClassForm.cabinetInputPlaceholder")}
							name="cabinet"
							rules={{validate: validateField}}
							className="cabinet"
						/>

						{
							Object.keys(methods.formState.errors).length !== 0 
									&&
								<p className="error-message">Все поля должны быть заполнены!</p>
						}

						<Button
							disabled={(!methods.formState.isValid)}
							type="submit"
						>{t("button.done")}</Button>
					</form>
				</FormProvider>
			</Container>
		</StyledAddClassPage>
	)
}

export default AddClassPage
