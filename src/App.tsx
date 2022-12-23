import Container from "./components/ordinary/Container/Container";
import LessonCard from "./components/ordinary/LessonCard/LessonCard";
import ProgressBar from "./components/ordinary/ProgressBar/ProgressBar";
import Header from "./components/smart/Header/Header";

function App() {
  return (
    <Container>
			<Header>
				<Header.NavBar/>
				<Header.BurgerButton/>
			</Header>
			
			<div className="schedule_row">
				<ProgressBar
					startTime="8:30"
					endTime="9:50"
				/>
				<LessonCard/>
			</div>
			<div className="schedule_row">
				<ProgressBar
					startTime="8:30"
					endTime="9:50"
				/>
				<LessonCard/>
			</div>
			<div className="schedule_row">
				<ProgressBar
					startTime="8:30"
					endTime="9:50"
				/>
				<LessonCard/>
			</div>
			<div className="schedule_row">
				<ProgressBar
					startTime="8:30"
					endTime="9:50"
				/>
				<LessonCard/>
			</div>

    </Container>
  )
}

export default App;
