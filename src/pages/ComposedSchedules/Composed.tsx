import ComposedSchedules from "../../components/wrappers/ComposedSchedules/ComposedSchedules"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledComposedPage } from "./Composed.styled"

const Composed = () => {
	return (
		<StyledComposedPage>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1> Составленные расписания </h1>
					<Header.BurgerButton/>
				</Header>

				<ComposedSchedules />

			</Container>
		</StyledComposedPage>
	)
}

export default Composed
