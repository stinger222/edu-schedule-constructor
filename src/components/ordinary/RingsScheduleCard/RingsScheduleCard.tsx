import { useTranslation } from "react-i18next"
import { formatTimeString } from "../../../core/utils/stringUtils"
import { StyledRingsScheduleCard } from "./RingsScheduleCard.styled"

interface IProps {
	length: number,
	start: string,
	end: string,
	name: string
}

const RingsScheduleCard: React.FC<IProps> = ({ length, start, end, name }) => {
  const { t } = useTranslation()

	return (
		<StyledRingsScheduleCard className="rings-schedule-card">
			<header>
				{name}
			</header>
			<div className="details">
				<div>{t("ringsScheduleCard.lessonsAmount")} <span className="value">{length}</span></div>
				<div>{t("ringsScheduleCard.start")} <span className="value">{ formatTimeString(start) }</span></div>
				<div>{t("ringsScheduleCard.end")} <span className="value">{ formatTimeString(end) }</span></div>
			</div>
		</StyledRingsScheduleCard>
	)
}

export default RingsScheduleCard
