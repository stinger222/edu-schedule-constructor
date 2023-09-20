import React from "react"
import { StyledClassCard } from "./ClassCard.styled"
import { useTranslation } from "react-i18next"

interface IProps {
	title: string,
	teacher: string,
	cabinet: string,
}

const ClassCard: React.FC<IProps> = ({ title, teacher, cabinet }) => {
  const { t } = useTranslation()

	return (
		<StyledClassCard className="class-card">
			<h1>{ title?.trim() || "<Название пары не указано>" }</h1>
			<footer>
				<span>{ teacher.trim() || "<Имя препода не указано>" }</span>
				<span>{t("classCard.cabinetPrefix")} { cabinet.trim() || "???" }</span>
			</footer>
		</StyledClassCard>
	)
}

export default React.memo(ClassCard)
