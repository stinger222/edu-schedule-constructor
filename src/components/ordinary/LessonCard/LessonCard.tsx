import React from "react"
import { replaceBlankProps } from "../../../core/utils/helpers"
import { StyledLessonCard } from "./LessonCard.styled"

interface IProps {
	title: string,
	teacher: string,
	cabinet: string,
}

const propsReplacements = {
	title: "<Название пары не указано>",
	teacher: "<Имя препода не указано>",
	cabinet: "???"
}

const LessonCard: React.FC<IProps> = (props) => {
	const { title, teacher, cabinet } = replaceBlankProps<IProps>(props, propsReplacements)

	return (
		<StyledLessonCard>
			<h1>{ title }</h1>
			<footer>
				<span>{ teacher }</span>
				<span>каб. { cabinet }</span>
			</footer>
		</StyledLessonCard>
	)
}

export default React.memo(LessonCard)
