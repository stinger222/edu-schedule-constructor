import { useContext } from "react"
import { useTranslation } from "react-i18next"
import { useLocation, useNavigate } from "react-router-dom"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"

import { StoreContext } from "../.."
import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import GhostButton from "../../components/ui/GhostButton/GhostButton"
import Container from "../../components/containers/Container/Container"
import AssembleDayForm from "../../components/smart/AssembleDay/AssembleDayForm"
import InputContainer from "../../components/containers/InputContainer/InputContainer"

import { WeekUtils } from "../../core/utils/dateTimeUtils"
import { validateField } from "../../core/utils/stringUtils"
import { Cases, IAssembledSchedule } from "../../core/types/types"
import useInitializeFormForEditMode from "../../core/hooks/useInitializeFormForEditMode"

import useAuth from "../../core/hooks/useAuth"
import Loader from "../../components/ordinary/Loader/Loader"
import { StyledAddAssembledSchedulePage } from "./AddAssembledSchedulePage.styled"


const AddAssembledSchedulePage = () => {
  const { assembledSchedulesStore } = useContext(StoreContext)
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage as "ru" | "en"

  const navigate = useNavigate()
  const routeState = useLocation().state

  const methods = useForm({
    defaultValues: {
      name: "",
      days: [{ classScheduleId: "", classIds: ["undefined"] }]
    }, shouldFocusError: false
  })
  
  const { fields, append } = useFieldArray({ control: methods.control, name: "days" })

  const handleSubmit = (formData: Omit<IAssembledSchedule, "uid">) => {
    if (routeState?.mode === "edit") {
      assembledSchedulesStore.updateSchedule(routeState.uid, formData)
    } else {
      assembledSchedulesStore.addSchedule(formData)
    }
    
    methods.reset()
    navigate(-1)
  }

  useInitializeFormForEditMode<IAssembledSchedule>(assembledSchedulesStore.assembledSchedules, routeState, methods)

  const isLoading = useAuth()
  if (isLoading) return <Loader />

  return (
    <StyledAddAssembledSchedulePage>
      <Container>
        <Header>
          <Header.NavHome />
          <h1>{routeState?.mode === "edit" ? t("headerTitle.editAssembledSchedule") : t("headerTitle.addAssembledSchedule")}</h1>
          <Header.BurgerButton />
        </Header>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <InputContainer
              name="name"
              label={t("assembleScheduleForm.schNameInputCaption")}
              placeholder={t("assembleScheduleForm.schNameInputPlaceholder")}
              rules={{ validate: validateField }}
            />

            {fields.map((_, index) => (
              <AssembleDayForm
                dayIndex={index}
                key={index}
              />
            ))}

            {fields.length < 5 && (
              <>
                <h2>{WeekUtils.getFull(lang, Cases.Nominative)[fields.length]}:</h2>
                <GhostButton onClick={() => append({ classScheduleId: "", classIds: ["undefined"] })}>
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
    </StyledAddAssembledSchedulePage>
  )
}

export default AddAssembledSchedulePage
