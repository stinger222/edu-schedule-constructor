import { useLocation, useNavigate } from "react-router-dom"
import { FormProvider, useForm } from "react-hook-form"
import { useContext, useEffect } from "react"

import InputWrapper from "../../components/containers/InputContainer/InputContainer"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import Button from "../../components/ui/Button/Button"

import { StoreContext } from "../.." 
import { ILesson } from "../../core/types/types"
import { validateField } from "../../core/utils/stringUtils"

import { StyledAddLessonPage } from "./AddLessonPage.styled"
import { useTranslation } from "react-i18next"

const AddLessonPage = () => {
  const { lessonsStore } = useContext(StoreContext)

  const navigate = useNavigate()
  const routeState = useLocation().state

  const { t } = useTranslation()

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

  // TODO: Maybe this can be moved to custom hook?...
  useEffect(() => {
    if (routeState?.mode === "edit") {
      const lessonToEdit = lessonsStore.lessons
        .find((lesson: ILesson) => {
          return lesson.uid === routeState.uid
        })

      methods.reset(lessonToEdit)
      methods.trigger()
    }
  }, [])

	return (
		<StyledAddLessonPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1>{routeState?.mode === "edit" ? t("headerTitle.editLesson") : t("headerTitle.addLesson")}</h1>
          {/* <h1>{routeState?.mode === "edit" ? "Редактировать расписание" : "Составить новое расписание"}</h1> */}
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
