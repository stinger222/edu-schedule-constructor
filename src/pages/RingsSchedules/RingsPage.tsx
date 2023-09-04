import { StyledRingsSchedulesPage } from "./RingsPage.styled"
import { StoreContext } from "../.."
import { useContext } from "react"

import RingsCardsList from "../../components/wrappers/RingsCardsList/RingsCardsList"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { useTranslation } from "react-i18next"

const RingsPage = () => {
  const { t } = useTranslation()
  const ringsSchedulesStore = useContext(StoreContext).ringsSchedulesStore

	return (
		<StyledRingsSchedulesPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> {t("headerTitle.ringsPage")} </h1>
					<Header.BurgerButton/>
				</Header>

				<RingsCardsList
					ringsSchedules={ringsSchedulesStore.ringsSchedules}
					removeSchedule={ringsSchedulesStore.removeSchedule.bind(ringsSchedulesStore)}
				/>

			</Container>
		</StyledRingsSchedulesPage>
	)
}

export default RingsPage
