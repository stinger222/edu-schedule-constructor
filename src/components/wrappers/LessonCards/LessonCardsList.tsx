import { Link } from "react-router-dom"
import { ILesson } from "../../../core/types/types"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import LessonCard from "../../ordinary/LessonCard/LessonCard"
import GhostButton from "../../ui/GhostButton/GhostButton"
import { StyledLessonCardsList } from "./LessonCardsList.styled"

interface IProps {
	lessons: ILesson[]
	removeLesson: (uid: string) => boolean 
}

const LessonCardsList: React.FC<IProps> = ({ lessons, removeLesson }) => {
	
	const handleSwipe = (uid: string) => {
		// console.log(window.confirm("Are you sure?") ? "Done 👌" : "¯\\_(ツ)_/¯")
		removeLesson(uid)
	}

	return (
		<StyledLessonCardsList className="lesson-cards">

			{ lessons.length === 0 &&
				<h2 style={{textAlign: "center", fontWeight: 400}}>
					Тут нихера нет ¯\_(ツ)_/¯
				</h2>
			}

			{
				lessons.map(lesson => (
					<SwipeToAction onSwipe={() => handleSwipe(lesson.uid)} key={lesson.uid}>
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
		</StyledLessonCardsList>
	)
}

export default LessonCardsList