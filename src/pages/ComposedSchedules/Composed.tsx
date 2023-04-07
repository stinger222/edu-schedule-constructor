import ComposedSchedules from "../../components/wrappers/ComposedSchedules/ComposedSchedules"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledComposedPage } from "./Composed.styled"
import { useContext } from "react"
import { StoreContext } from "../.."

const Composed = () => {

	const { composedSchedules } = useContext(StoreContext).composedSchedulesStore

	return (
		<StyledComposedPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> Составленные расписания </h1>
					<Header.BurgerButton/>
				</Header>

				<ComposedSchedules composedSchedules={composedSchedules}/>

			</Container>
		</StyledComposedPage>
	)
}

export default Composed
