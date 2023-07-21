import ComposedSchedulesList from "../../components/wrappers/ComposedSchedulesList/ComposedSchedulesList"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledComposedSchedulesPage } from "./ComposedSchedulesPage.styled"
import { useContext } from "react"
import { StoreContext } from "../.."

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
