import LessonCard from "../../ordinary/LessonCard/LessonCard"
import GhostButton from "../../ui/GhostButton/GhostButton"
import { StyledLessonCards } from "./LessonCards.styled"

const LessonCards = () => {
	return (
		<StyledLessonCards className="lesson-cards">
			<LessonCard
				cabinet="23т"
				teacher="Иванов Иван"
				title="Название пары"
			/>
			<LessonCard
				cabinet="23т"
				teacher="Иванов Иван"
				title="Название пары"
			/>
			<LessonCard
				cabinet="23т"
				teacher="Иванов Иван"
				title="Название пары"
			/>
			<LessonCard
				cabinet="23т"
				teacher="Иванов Иван"
				title="Название пары"
			/>
			
			<GhostButton> Добавить предмет </GhostButton>
		</StyledLessonCards>
	)
}

export default LessonCards
