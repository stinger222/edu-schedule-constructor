import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"

import { StoreContext } from "../.."
import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import GhostButton from "../../components/ui/GhostButton/GhostButton"
import Container from "../../components/containers/Container/Container"
import ComposeDayForm from "../../components/smart/ComposeDay/ComposeDayForm"
import InputWrapper from "../../components/containers/InputContainer/InputContainer"

import { WeekUtils } from "../../core/utils/dateTimeUtils"
import { validateField } from "../../core/utils/stringUtils"
import { Cases, IComposedSchedule } from "../../core/types/types"
import useInitializeFormForEditMode from "../../core/hooks/useInitializeFormForEditMode"

import { StyledAddComposedSchedulePage } from "./AddComposedSchedulePage.styled"


const AddComposedSchedulePage = () => {
  const { composedSchedulesStore } = useContext(StoreContext)
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage as "ru" | "en"

  const navigate = useNavigate()
  const routeState = useLocation().state

  const methods = useForm({
    defaultValues: {
      name: "",
      days: [{ ringsScheduleId: "", lessonIds: ["undefined"] }]
    }
  })
  
  const { fields, append } = useFieldArray({ control: methods.control, name: "days" })

  const handleSubmit = (formData: Omit<IComposedSchedule, "uid">) => {
    if (routeState?.mode === "edit") { // TODO: Should this be moved to store?...
      composedSchedulesStore.removeSchedule(routeState.uid)
      composedSchedulesStore.addSchedule(formData, routeState.uid)
    } else {
      composedSchedulesStore.addSchedule(formData)
    }
    
    methods.reset()
    navigate(-1)
  }

  useInitializeFormForEditMode<IComposedSchedule>(composedSchedulesStore.composedSchedules, routeState, methods)

  return (
    <StyledAddComposedSchedulePage>
      <Container>
        <Header>
          <Header.NavHome />
          <h1>{routeState?.mode === "edit" ? t("headerTitle.editComposedSchedule") : t("headerTitle.addComposedSchedule")}</h1>
          <Header.BurgerButton />
        </Header>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <InputWrapper
              name="name"
              label={t("composeScheduleForm.schNameInputCaption")}
              placeholder={t("composeScheduleForm.schNameInputPlaceholder")}
              rules={{ validate: validateField }}
            />

            {fields.map((_, index) => (
              <ComposeDayForm
                dayIndex={index}
                key={index}
              />
            ))}

            {fields.length < 5 && (
              <>
                <h2>{WeekUtils.getFull(lang, Cases.Nominative)[fields.length]}:</h2>
                <GhostButton onClick={() => append({ ringsScheduleId: "", lessonIds: ["undefined"] })}>
                  {t("ghostButton.fillScheduleFor")} {WeekUtils.getFull(lang, Cases.Accusative, true)[fields.length]}
                  <br />
                  <span className="plus">+</span>
                </GhostButton>
              </>
            )}

            <Button
              type="submit"
              disabled={!methods.formState.isValid}
            >
              {t("button.done")}
            </Button>
          </form>
        </FormProvider>
      </Container>
    </StyledAddComposedSchedulePage>
  )
}

export default AddComposedSchedulePage
