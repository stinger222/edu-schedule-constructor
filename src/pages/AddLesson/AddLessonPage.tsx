import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { FormProvider, useForm } from "react-hook-form"
import { useLocation, useNavigate } from "react-router-dom"

import { StoreContext } from "../.." 
import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import InputWrapper from "../../components/containers/InputContainer/InputContainer"

import { ILesson } from "../../core/types/types"
import { validateField } from "../../core/utils/stringUtils"
import useInitializeFormForEditMode from "../../core/hooks/useInitializeFormForEditMode"

import { StyledAddLessonPage } from "./AddLessonPage.styled"


const AddLessonPage = () => {
  const { lessonsStore } = useContext(StoreContext)
  const { t } = useTranslation()

  const navigate = useNavigate()
  const routeState = useLocation().state

	const methods = useForm({defaultValues: {
		title: "",
		teacher: "",
		cabinet: ""
	}})

	const handleSubmit = (formData: Omit<ILesson, "uid">) => {
    if (routeState?.mode === "edit") { // TODO: Should this be moved to store?...
      lessonsStore.removeLesson(routeState.uid)
      lessonsStore.addLesson(formData, routeState.uid)
    } else {
      lessonsStore.addLesson(formData)
    }
		methods.reset()
    navigate(-1)
	}

  useInitializeFormForEditMode<ILesson>(lessonsStore.lessons, routeState, methods)

	return (
		<StyledAddLessonPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1>{routeState?.mode === "edit" ? t("headerTitle.editLesson") : t("headerTitle.addLesson")}</h1>
					<Header.BurgerButton/>
				</Header>

				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(handleSubmit)}>
						<InputWrapper
							label={t("addLessonForm.lessonNameInputCaption")}
							placeholder={t("addLessonForm.lessonNameInputPlaceholder")}
							name="title"
							rules={{validate: validateField}}
							className="title"
						/>
						<InputWrapper
							label={t("addLessonForm.teacherNameInputCaption")}
							placeholder={t("addLessonForm.teacherNameInputPlaceholder")}
							name="teacher"
							rules={{validate: validateField}}
							className="teacher"
						/>
						<InputWrapper
							label={t("addLessonForm.cabinetInputCaption")}
							placeholder={t("addLessonForm.cabinetInputPlaceholder")}
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
		</StyledAddLessonPage>
	)
}

export default AddLessonPage
