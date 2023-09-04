import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ScheduleItemsList from "../../components/wrappers/ScheduleItemsList/ScheduleItemsList"
import ErrorFallback from "../../components/ordinary/ErrorFallback/ErrorFallback"
import { ErrorBoundary } from "react-error-boundary"

import { StyledMainPage } from "./MainPage.styled"
import { useContext } from "react"
import { StoreContext } from "../.."
import { observer } from "mobx-react"
import { useTranslation } from "react-i18next"


const MainPage = () => {
  const { uiStore } = useContext(StoreContext)
  const { t } = useTranslation()

	return (
		<StyledMainPage>
			<Container>
				<Header>
					<Header.NavBar/>
					<Header.BurgerButton/>
				</Header>
        
        <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[uiStore.selectedDayIndex]}>
            <ScheduleItemsList />
        </ErrorBoundary>

			</Container>
		</StyledMainPage>
	)
}

export default observer(MainPage)
