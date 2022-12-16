import Container from "./components/ordinary/Container/Container";
import Header from "./components/smart/Header/Header";

function App() {
  return (
    <Container>
			<Header>
				<Header.NavBar/>
				<Header.BurgerButton/>
			</Header>
    </Container>
  )
}

export default App;
