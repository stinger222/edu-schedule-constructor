import { randInt } from "../../utils/helpers"
import Container from "../Container/Container"
import { StyledLessonCard } from "./LessonCardFull.styled"

interface IProps {
	cabinet: string,
	index: number,
	startTime: string,
	endTime: string,
	lessonName: string,
	teacherName: string,
	theme: number[]
}

const LessonCard: React.FC<IProps> = ({
	cabinet, index, startTime, endTime, lessonName, teacherName, theme
}) => {
	
	const range = randInt(theme[0], theme[1])

	return (
		<StyledLessonCard style={{background: `hsl(${range}deg 74% 71% / 15%)`}}>
			<div className="header">
				<span>{index} пара {startTime} — {endTime}</span>
				<span>каб. {cabinet}</span>
			</div>
			<h1 className="lesson_name">{lessonName}</h1>
			<div className="teacher_name">{teacherName}</div>
		</StyledLessonCard>
	)
}

export default LessonCard
