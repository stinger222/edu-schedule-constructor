import RingsCards from "../../components/wrappers/RingsCards/RingsCards"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledRingsPage } from "./Rings.styled"
import { useContext } from "react"
import { StoreContext } from "../.."

const Rings = () => {

	const ringsSchedulesStore = useContext(StoreContext).ringsSchedulesStore

	return (
		<StyledRingsPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> Расписания звонков </h1>
					<Header.BurgerButton/>
				</Header>

				<RingsCards
					ringsSchedules={ringsSchedulesStore.ringsSchedules}
					removeSchedule={ringsSchedulesStore.removeSchedule.bind(ringsSchedulesStore)}
				/>

			</Container>
		</StyledRingsPage>
	)
}

export default Rings
