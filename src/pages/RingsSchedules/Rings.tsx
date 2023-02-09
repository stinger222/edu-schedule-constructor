import RingsCards from "../../components/containers/RingsCards/RingsCards"
import Container from "../../components/containers/Container/Container"
import GhostButton from "../../components/ui/GhostButton/GhostButton"
import Header from "../../components/smart/Header/Header"
import { StyledRingsPage } from "./Rings.styled"
import { Link } from "react-router-dom"

const Rings = () => {
  return (
    <StyledRingsPage>
			<Container>
				<Header>
						<Header.NavHome/>
						<h1> Расписания звонков </h1>
						<Header.BurgerButton/>
				</Header>

				<RingsCards />

				<Link to="/add/rings">
					<GhostButton>Добавить расписание звонков</GhostButton>
				</Link>
			</Container>
    </StyledRingsPage>
  )
}

export default Rings
