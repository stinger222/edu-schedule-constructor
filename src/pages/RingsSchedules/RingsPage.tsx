import { StyledRingsSchedulesPage } from "./RingsPage.styled"
import { StoreContext } from "../.."
import { useContext } from "react"

import RingsCardsList from "../../components/wrappers/RingsCards/RingsCardsList"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"

const RingsPage = () => {

	const ringsSchedulesStore = useContext(StoreContext).ringsSchedulesStore

	return (
		<StyledRingsSchedulesPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> Расписания звонков </h1>
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
