import { useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { StoreContext } from "../.."
import { Cases, IComposedSchedule } from "../../core/types/types"
import { StyledAddComposedSchedulePage } from "./AddComposedSchedulePage.styled"

import { FormProvider, useFieldArray, useForm } from "react-hook-form"

import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ComposeDayForm from "../../components/smart/ComposeDay/ComposeDayForm"
import GhostButton from "../../components/ui/GhostButton/GhostButton"
import InputWrapper from "../../components/containers/InputContainer/InputContainer"
import { WeekDays } from "../../core/utils/dateTimeUtils"
import { validateField } from "../../core/utils/stringUtils"
import { useTranslation } from "react-i18next"

const AddComposedSchedulePage = () => {
  const { composedSchedulesStore } = useContext(StoreContext)

  const navigate = useNavigate()
  const routeState = useLocation().state
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage as "ru" | "en"

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

  // TODO: Maybe this can be moved to custom hook?...
  useEffect(() => {
    if (routeState?.mode === "edit") {
      const scheduleToEdit = composedSchedulesStore.composedSchedules
        .find((schedule: IComposedSchedule) => {
          return schedule.uid === routeState.uid
        })

      methods.reset(scheduleToEdit)
    }
  }, [])

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
                <h2>{WeekDays.getFull(lang, Cases.Nominative)[fields.length]}:</h2>
                <GhostButton onClick={() => append({ ringsScheduleId: "", lessonIds: ["undefined"] })}>
                  {t("ghostButton.fillScheduleFor")} {WeekDays.getFull(lang, Cases.Accusative, true)[fields.length]}
                  <br />
                  <span className="plus">+</span>
                </GhostButton>
              </>
            )}

            <Button
              type="submit"
              disabled={!methods.formState.isValid /*|| (fields.length < 5)*/}
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
