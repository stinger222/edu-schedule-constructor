import { Link } from "react-router-dom"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import LessonCard from "../../ordinary/LessonCard/LessonCard"
import GhostButton from "../../ui/GhostButton/GhostButton"
import { StyledLessonCards } from "./LessonCards.styled"

const LessonCards = () => {

	const handleSwipe = () => {
		console.log(window.confirm("Are you sure?") ? 'Done 👌' : '¯\\_(ツ)_/¯')
	}

	return (
		<StyledLessonCards className="lesson-cards">

			<SwipeToAction onSwipe={handleSwipe}>
				<LessonCard
					cabinet="223т"
					teacher="Иванов Иван"
					title="Название пары"
				/>
			</SwipeToAction>
			
			<SwipeToAction onSwipe={handleSwipe}>
				<LessonCard
					cabinet="223т"
					teacher="Иванов Иван"
					title="Название пары"
				/>
			</SwipeToAction>
			<SwipeToAction onSwipe={handleSwipe}>
				<LessonCard
					cabinet="223т"
					teacher="Иванов Иван"
					title="Название пары"
				/>
			</SwipeToAction>
			<SwipeToAction onSwipe={handleSwipe}>
				<LessonCard
					cabinet="223т"
					teacher="Иванов Иван"
					title="Название пары"
				/>
			</SwipeToAction>

			<Link to="/add/lesson">
				<GhostButton> Добавить предмет <span className="plus">+</span></GhostButton>
			</Link>
		</StyledLessonCards>
	)
}

export default LessonCards
