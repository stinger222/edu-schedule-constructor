import Container from "./components/ordinary/Container/Container";
import Header from "./components/smart/Header/Header";

function App() {
  return (
    <Container>
			<Header>
				<Header.NavBar/>
				<Header.BurgerButton/>
			</Header>

			<Header>
				<Header.NavHome/>
				<h1 className="title">Some Pretty Long Caption</h1>
				<Header.BurgerButton style={{margin: 0}}/>
			</Header>
    </Container>
  )
}

export default App;
