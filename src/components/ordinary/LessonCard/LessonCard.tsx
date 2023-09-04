import React from "react"
import { StyledLessonCard } from "./LessonCard.styled"
import { useTranslation } from "react-i18next"

interface IProps {
	title: string,
	teacher: string,
	cabinet: string,
}

const LessonCard: React.FC<IProps> = ({ title, teacher, cabinet }) => {
  const { t } = useTranslation()

	return (
		<StyledLessonCard className="lesson-card">
			<h1>{ title.trim() || "<Название пары не указано>" }</h1>
			<footer>
				<span>{ teacher.trim() || "<Имя препода не указано>" }</span>
				<span>{t("lessonCard.cabinetPrefix")} { cabinet.trim() || "???" }</span>
			</footer>
		</StyledLessonCard>
	)
}

export default React.memo(LessonCard)
