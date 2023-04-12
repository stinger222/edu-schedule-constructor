import { Link } from "react-router-dom"
import { ILesson } from "../../../core/types/types"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import LessonCard from "../../ordinary/LessonCard/LessonCard"
import GhostButton from "../../ui/GhostButton/GhostButton"
import { StyledLessonCards } from "./LessonCards.styled"

interface IProps {
	lessons: ILesson[]
}

const LessonCards: React.FC<IProps> = ({ lessons }) => {

	const handleSwipe = () => {
		console.log(window.confirm("Are you sure?") ? "Done 👌" : "¯\\_(ツ)_/¯")
	}

	return (
		<StyledLessonCards className="lesson-cards">

			{ lessons.length === 0 &&
				<h2 style={{textAlign: "center", fontWeight: 400}}>
					Тут нихера нет ¯\_(ツ)_/¯
				</h2>
			}

			{
				lessons.map(lesson => (
					<SwipeToAction onSwipe={handleSwipe} key={lesson.uid}>
						<LessonCard 
							cabinet={lesson.cabinet}
							teacher={lesson.teacher}
							title={lesson.title}
						/>
					</SwipeToAction>
				))
			}

			<Link to="/add/lesson">
				<GhostButton> Добавить предмет <span className="plus">+</span></GhostButton>
			</Link>
		</StyledLessonCards>
	)
}

export default LessonCards
