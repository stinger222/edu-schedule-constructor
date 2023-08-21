import { useContext } from "react"

import { StoreContext } from "../.."
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import ComposedSchedulesList from "../../components/wrappers/ComposedSchedulesList/ComposedSchedulesList"

import { StyledComposedSchedulesPage } from "./ComposedSchedulesPage.styled"

const ComposedSchedulesPage = () => {
  const composedSchedulesStore = useContext(StoreContext).composedSchedulesStore

  return (
    <StyledComposedSchedulesPage>
      <Container>
        <Header>
          <Header.NavHome />
          <h1> Составленные расписания </h1>
          <Header.BurgerButton />
        </Header>

        <ComposedSchedulesList
          composedSchedules={composedSchedulesStore.composedSchedules}
          removeSchedule={composedSchedulesStore.removeSchedule.bind(composedSchedulesStore)}
        />
      </Container>
    </StyledComposedSchedulesPage>
  )
}

export default ComposedSchedulesPage
