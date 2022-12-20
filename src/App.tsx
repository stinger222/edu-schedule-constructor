import Container from "./components/ordinary/Container/Container";
import LessonCard from "./components/ordinary/LessonCard/LessonCard";
import Header from "./components/smart/Header/Header";

function App() {
  return (
    <Container>
			<Header>
				<Header.NavBar/>
				<Header.BurgerButton/>
			</Header>

			<LessonCard/>

    </Container>
  )
}

export default App;
