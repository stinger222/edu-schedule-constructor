import RingsCards from "../../components/containers/RingsCards/RingsCards"
import Container from "../../components/containers/Container/Container"
import GhostButton from "../../components/ui/GhostButton/GhostButton"
import Header from "../../components/smart/Header/Header"
import { StyledRingsPage } from "./Rings.styled"

const Rings = () => {
  return (
    <StyledRingsPage>
			<Container>
				<Header>
						<Header.NavHome/>
						<h1> Расписания звонков </h1>
						<Header.BurgerButton style={{margin: 0}}/>
				</Header>

				<RingsCards />

				<GhostButton>Добавить расписание звонков</GhostButton>
			</Container>
    </StyledRingsPage>
  )
}

export default Rings
