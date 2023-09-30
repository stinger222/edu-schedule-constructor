import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ErrorBoundary } from "react-error-boundary"

import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ClassScheduleCardsList from "../../components/wrappers/ClassScheduleCardsList/ClassScheduleCardsList"

import { StyledClassSchedulesPage } from "./ClassSchedulesPage.styled"

const ClassSchedulesPage = () => {
  const { t } = useTranslation()
  const classSchedulesStore = useContext(StoreContext).classSchedulesStore

	return (
		<StyledClassSchedulesPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> {t("headerTitle.classSchedulesPage")} </h1>
					<Header.BurgerButton/>
				</Header>

        <ErrorBoundary fallback={<Navigate to="/"/>}>
          <ClassScheduleCardsList
            classSchedules={classSchedulesStore.classSchedules}
            removeSchedule={classSchedulesStore.removeSchedule.bind(classSchedulesStore)}
          />
        </ErrorBoundary>

			</Container>
		</StyledClassSchedulesPage>
	)
}

export default ClassSchedulesPage
