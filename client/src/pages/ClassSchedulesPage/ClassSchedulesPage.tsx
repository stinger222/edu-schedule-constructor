import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { ErrorBoundary } from "react-error-boundary"

import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ClassScheduleCardsList from "../../components/wrappers/ClassScheduleCardsList/ClassScheduleCardsList"

import { StyledClassSchedulesPage } from "./ClassSchedulesPage.styled"
import { observer } from "mobx-react"
import useAuth from "../../core/hooks/useAuth"
import Loader from "../../components/ordinary/Loader/Loader"

const ClassSchedulesPage = () => {
  const { t } = useTranslation()
  const classSchedulesStore = useContext(StoreContext).classSchedulesStore

  const isLoading = useAuth()

	return (
		<StyledClassSchedulesPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> {t("headerTitle.classSchedulesPage")} </h1>
					<Header.BurgerButton/>
				</Header>

        { isLoading ?  <Loader /> :
          <ErrorBoundary fallback={<Navigate to="/"/>}>
            <ClassScheduleCardsList
              classSchedules={classSchedulesStore.classSchedules}
              removeSchedule={classSchedulesStore.removeSchedule.bind(classSchedulesStore)}
              isLoading={classSchedulesStore.isLoading}
            />
          </ErrorBoundary>
        }

			</Container>
		</StyledClassSchedulesPage>
	)
}

export default observer(ClassSchedulesPage)
