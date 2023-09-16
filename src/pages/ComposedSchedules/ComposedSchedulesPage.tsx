import { useContext } from "react"

import { StoreContext } from "../.."
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import ComposedSchedulesList from "../../components/wrappers/ComposedSchedulesList/ComposedSchedulesList"

import { StyledComposedSchedulesPage } from "./ComposedSchedulesPage.styled"
import { observer } from "mobx-react"
import { useTranslation } from "react-i18next"

const ComposedSchedulesPage = () => {
  const composedSchedulesStore = useContext(StoreContext).composedSchedulesStore
  const { t } = useTranslation()

  const __DEV__ = process.env.NODE_ENV  === "development"

  return (
    <StyledComposedSchedulesPage>
      <Container>
        <Header>
          <Header.NavHome />
          <h1> {t("headerTitle.composedPage")} </h1>
          <Header.BurgerButton />
        </Header>

        {/* {__DEV__ &&
          <div style={{textAlign: "center", padding: "0.5em", fontSize: "1.3em"}}>
            Active: {composedSchedulesStore.activeScheduleUid}
          </div>
        } */}

        <ComposedSchedulesList
          composedSchedules={composedSchedulesStore.composedSchedules}
          removeSchedule={composedSchedulesStore.removeSchedule.bind(composedSchedulesStore)}
        />
      </Container>
    </StyledComposedSchedulesPage>
  )
}

export default observer(ComposedSchedulesPage) // <=== DEBUG OBSERVER!!
