import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ScheduleItemsList from "../../components/smart/ScheduleItemsList/ScheduleItemsList"
import ErrorFallback from "../../components/ordinary/ErrorFallback/ErrorFallback"
import { ErrorBoundary } from "react-error-boundary"

import { StyledMainPage } from "./MainPage.styled"
import { useContext } from "react"
import { StoreContext } from "../.."
import { observer } from "mobx-react"

const MainPage = () => {
  
  const { uiStore } = useContext(StoreContext)

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
