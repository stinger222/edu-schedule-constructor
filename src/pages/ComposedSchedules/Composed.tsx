import ComposedSchedules from "../../components/wrappers/ComposedSchedules/ComposedSchedules"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledComposedPage } from "./Composed.styled"
import { useContext } from "react"
import { StoreContext } from "../.."

const Composed = () => {
	const composedSchedulesStore = useContext(StoreContext).composedSchedulesStore

	return (
		<StyledComposedPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> Составленные расписания </h1>
					<Header.BurgerButton/>
				</Header>

				<ComposedSchedules
					composedSchedules={composedSchedulesStore.composedSchedules}
					removeSchedule={composedSchedulesStore.removeSchedule.bind(composedSchedulesStore)}
				/>

			</Container>
		</StyledComposedPage>
	)
}

export default Composed
