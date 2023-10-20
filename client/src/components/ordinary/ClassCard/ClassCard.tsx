import React from "react"
import { StyledClassCard } from "./ClassCard.styled"
import { useTranslation } from "react-i18next"

interface IProps {
	title: string,
	teacher: string,
	cabinet: string,
}

const ClassCard = ({ title, teacher, cabinet }: IProps) => {
  const { t } = useTranslation()

	return (
		<StyledClassCard className="class-card">
			<h1 className="max-lines-2">
        { title?.trim() || "<Название пары не указано>" }
      </h1>
			<footer>
				<span className="max-lines-1">
          { teacher.trim() || "<Имя препода не указано>" }
        </span>
				<span className="max-lines-1">
          {t("classCard.cabinetPrefix")} { cabinet.trim() || "???" }
        </span>
			</footer>
		</StyledClassCard>
	)
}

export default React.memo(ClassCard)
