import RingsCards from "../../components/wrappers/RingsCards/RingsCards"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import { StyledRingsPage } from "./Rings.styled"

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

			</Container>
    </StyledRingsPage>
  )
}

export default Rings
