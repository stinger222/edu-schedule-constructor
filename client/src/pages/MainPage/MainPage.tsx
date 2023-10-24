import { useContext, useState } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { observer } from "mobx-react"
import { Link } from "react-router-dom"

import { StoreContext } from "../.."
import ScheduleItemsList from "../../components/wrappers/ScheduleItemsList/ScheduleItemsList"
import ErrorFallback from "../../components/ordinary/ErrorFallback/ErrorFallback"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"

import i18n from "../../core/configs/i18next"
import { StyledMainPage } from "./MainPage.styled"
import Loader from "../../components/ordinary/Loader/Loader"
import useAuth from "../../core/hooks/useAuth"

const MainPage = () => {
  const stores = useContext(StoreContext)
  const [lang, setLang] = useState(i18n.language)

  i18n.on("languageChanged", (newLng: string) => {
    setLang(newLng)
  })

  const dataIsLoading = stores.assembledSchedulesStore.isLoading 
    ||  stores.classesStore.isLoading
    ||  stores.classSchedulesStore.isLoading


  const authDataIsLoading = useAuth()
  if (authDataIsLoading) return <Loader />

	return (
		<StyledMainPage>
			<Container>
				<Header>
					<Header.NavBar/>
					<Header.BurgerButton/>
				</Header>

        <Link to="/debug" className="link">Debug &quot;Dashboard&quot;</Link>
        <br/><br/>

          { dataIsLoading ? <Loader /> : 
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              resetKeys={[lang, stores.uiStore.selectedDayIndex, stores.assembledSchedulesStore.assembledSchedules]}
            >
              <ScheduleItemsList />
            </ErrorBoundary>
          }

			</Container>
		</StyledMainPage>
	)
}

export default observer(MainPage)
