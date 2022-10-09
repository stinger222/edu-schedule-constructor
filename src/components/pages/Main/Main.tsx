import Container from "../../Container/Container"
import Header from "../../Header/Header"
import StyledMain from "./Main.styled"

const Main = () => {
	return (
		<Container>
			<StyledMain>
				<Header/>
				<div className="card">Card</div>
			</StyledMain>
		</Container>
	)
}

export default Main
