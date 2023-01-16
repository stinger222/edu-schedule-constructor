import Header from "../components/smart/Header/Header"
import Container from "../components/containers/Container/Container"
import GhostButton from "../components/ui/GhostButton/GhostButton"
import ComposedSchedule from "../components/smart/ComposedSchedule/ComposedSchedule"

const Composed = () => {
	return (
		<Container>
			<Header>
				<Header.NavHome/>
				<h1> Составленные расписания </h1>
				<Header.BurgerButton style={{margin: 0}}/>
			</Header>

			<ComposedSchedule />
			<GhostButton>Составить новое расписание</GhostButton>
		</Container>
	)
}

export default Composed
