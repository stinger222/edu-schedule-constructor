import LessonCard from "../../ordinary/LessonCard/LessonCard"
import { StyledLessonCards } from "./LessonCards.styled"

interface IProps {
	
}

const LessonCards: React.FC<IProps> = ({  }) => {
	return (
		<StyledLessonCards>
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
		</StyledLessonCards>
	)
}

export default LessonCards
