import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { StoreContext } from "../../.."
import SelectedSchedule from "./SelectedSchedule"
import Container from "../../Container/Container"
import Header from "../../Header/Header"
import StyledMain from "./Main.styled"
import ErrorFallback from "../../ErrorFallback/ErrorFallback"

const Main = () => {
	const { uiStore } = useContext(StoreContext)

	return (
		<StyledMain>
			<Header/>
			<Container>
				<ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[uiStore.selectedDayId]}>
					<SelectedSchedule />
				</ErrorBoundary>
			</Container>
		</StyledMain>
	)
}

export default observer(Main)