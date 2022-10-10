import Container from "../Container/Container"
import { StyledLessonCard } from "./LessonCard.styled"

interface IProps {
	cabinet: string,
	lessonId: number,
	startTime: string,
	endTime: string,
	lessonName: string,
	teacherName: string
}

const LessonCard: React.FC<IProps> = ({
	cabinet, lessonId, startTime, endTime, lessonName, teacherName
}) => {
	return (
		<StyledLessonCard>
			<div className="header">
				<span>{lessonId} пара {startTime} — {endTime}</span>
				<span>каб. {cabinet}</span>
			</div>
			<h1 className="lesson_name">{lessonName}</h1>
			<div className="teacher_name">{teacherName}</div>
		</StyledLessonCard>
	)
}

export default LessonCard
