import { useContext } from "react"

import { StoreContext } from "../.."
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import AssembledSchedulesList from "../../components/wrappers/AssembledSchedulesList/AssembledSchedulesList"

import { StyledAssembledSchedulesPage } from "./AssembledSchedulesPage.styled"
import { useTranslation } from "react-i18next"

const AssembledSchedulesPage = () => {
  const assembledSchedulesStore = useContext(StoreContext).assembledSchedulesStore
  const { t } = useTranslation()

  return (
    <StyledAssembledSchedulesPage>
      <Container>
        <Header>
          <Header.NavHome />
          <h1> {t("headerTitle.assembledPage")} </h1>
          <Header.BurgerButton />
        </Header>

        <AssembledSchedulesList
          assembledSchedules={assembledSchedulesStore.assembledSchedules}
          removeSchedule={assembledSchedulesStore.removeSchedule.bind(assembledSchedulesStore)}
        />
      </Container>
    </StyledAssembledSchedulesPage>
  )
}

export default AssembledSchedulesPage
