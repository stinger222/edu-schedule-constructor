import Header from "../components/smart/Header/Header"
import Container from "../components/ordinary/Container/Container"
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
		</Container>
	)
}

export default Composed
