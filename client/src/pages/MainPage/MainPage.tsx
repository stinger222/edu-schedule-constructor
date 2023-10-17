import { useContext, useState } from "react"
import { observer } from "mobx-react"
import { ErrorBoundary } from "react-error-boundary"

import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ErrorFallback from "../../components/ordinary/ErrorFallback/ErrorFallback"
import ScheduleItemsList from "../../components/wrappers/ScheduleItemsList/ScheduleItemsList"

import i18n from "../../core/configs/i18next"
import { StyledMainPage } from "./MainPage.styled"
import { Link } from "react-router-dom"

const MainPage = () => {
  const { uiStore, assembledSchedulesStore } = useContext(StoreContext)

  const [lang, setLang] = useState(i18n.language)

  i18n.on("languageChanged", (newLng: string) => {
    setLang(newLng)
  })

	return (
		<StyledMainPage>
			<Container>
				<Header>
					<Header.NavBar/>
					<Header.BurgerButton/>
				</Header>

        <Link to="/debug" className="link">Debug Thing</Link>
        <br />
         
        <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[uiStore.selectedDayIndex, lang, assembledSchedulesStore.assembledSchedules]}>
          <ScheduleItemsList />
        </ErrorBoundary>

			</Container>
		</StyledMainPage>
	)
}

export default observer(MainPage)
