import { useContext, useEffect, useState } from "react"
import { observer } from "mobx-react"
import { ErrorBoundary } from "react-error-boundary"

import { StoreContext } from "../.."
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ErrorFallback from "../../components/ordinary/ErrorFallback/ErrorFallback"
import ScheduleItemsList from "../../components/wrappers/ScheduleItemsList/ScheduleItemsList"

import i18n from "../../core/configs/i18next"
import { StyledMainPage } from "./MainPage.styled"
import ky from "ky"

const MainPage = () => {
  const { uiStore, authStore } = useContext(StoreContext)

  const [lang, setLang] = useState(i18n.language)

  i18n.on("languageChanged", (newLng: string) => {
    setLang(newLng)
  })
  
  const [me, setMe] = useState<any>()

   useEffect(() => {
    (async () => {
      try {
        const data = await ky.get("http://localhost:3001/users/me", {
          credentials: "include"
        }).json()
        setMe(data)
        return data
      } catch(err) {
        return
      }
    })()
   }, [])

	return (
		<StyledMainPage>
			<Container>
				<Header>
					<Header.NavBar/>
					<Header.BurgerButton/>
				</Header>

        <h1>signed in: {authStore.isSignedIn.toString()}</h1>
        <pre>{JSON.stringify(me, null, 2)}</pre>

        <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={[uiStore.selectedDayIndex, lang]}>
            <ScheduleItemsList />
        </ErrorBoundary>

			</Container>
		</StyledMainPage>
	)
}

export default observer(MainPage)
