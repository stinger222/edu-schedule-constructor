import { Link } from "react-router-dom"
import ComposedSchedules from "../../components/wrappers/ComposedSchedules/ComposedSchedules"
import Container from "../../components/wrappers/Container/Container"
import Header from "../../components/smart/Header/Header"
import GhostButton from "../../components/ui/GhostButton/GhostButton"
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

				<Link to="/add/composed">
					<GhostButton> Составить новое расписание </GhostButton>
				</Link>
			</Container>
		</StyledComposedPage>
	)
}

export default Composed
