import React from "react"
import { StyledLessonCard } from "./LessonCard.styled"

interface IProps {
	title: string,
	teacher: string,
	cabinet: string,
}

const LessonCard: React.FC<IProps> = ({ title, teacher, cabinet }) => {
	return (
		<StyledLessonCard className="lesson-card">
			<h1>{ title }</h1>
			<footer>
				<span>{ teacher }</span>
				<span>каб. { cabinet }</span>
			</footer>
		</StyledLessonCard>
	)
}

export default React.memo(LessonCard)
