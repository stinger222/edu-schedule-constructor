import { useContext } from "react"
import { observer } from "mobx-react"
import { Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ErrorBoundary } from "react-error-boundary"

import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import AssembledSchedulesList from "../../components/wrappers/AssembledSchedulesList/AssembledSchedulesList"

import { StyledAssembledSchedulesPage } from "./AssembledSchedulesPage.styled"

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
        
        {/* this fallback can check if occured error should redirect to the main page
            or (if this is, for example, error, indicationg that db or backend not working) 
            can be just a message right here */}
        <ErrorBoundary fallback={<Navigate to="/"/>}>
          <AssembledSchedulesList
            assembledSchedules={assembledSchedulesStore.assembledSchedules}
            removeSchedule={assembledSchedulesStore.removeSchedule.bind(assembledSchedulesStore)}
            isLoading={assembledSchedulesStore.isLoading} 
          />
        </ErrorBoundary>

      </Container>
    </StyledAssembledSchedulesPage>
  )
}

export default observer(AssembledSchedulesPage)
