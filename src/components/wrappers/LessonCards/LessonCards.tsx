import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import LessonCard from "../../ordinary/LessonCard/LessonCard"
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
		</StyledLessonCards>
	)
}

export default LessonCards
