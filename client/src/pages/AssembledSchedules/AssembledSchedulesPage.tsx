import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ErrorBoundary } from "react-error-boundary"

import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import AssembledSchedulesList from "../../components/wrappers/AssembledSchedulesList/AssembledSchedulesList"

import { StyledAssembledSchedulesPage } from "./AssembledSchedulesPage.styled"
import { observer } from "mobx-react"

const AssembledSchedulesPage = () => {
  const { t } = useTranslation()
  const assembledSchedulesStore = useContext(StoreContext).assembledSchedulesStore

  return (
    <StyledAssembledSchedulesPage>
      <Container>
        <Header>
          <Header.NavHome />
          <h1> {t("headerTitle.assembledPage")} </h1>
          <Header.BurgerButton />
        </Header>

        <ErrorBoundary fallback={<Navigate to="/"/>}>
          <AssembledSchedulesList
            assembledSchedules={assembledSchedulesStore.assembledSchedules}
            removeSchedule={assembledSchedulesStore.removeSchedule.bind(assembledSchedulesStore)}
          />
        </ErrorBoundary>

      </Container>
    </StyledAssembledSchedulesPage>
  )
}

export default observer(AssembledSchedulesPage)
