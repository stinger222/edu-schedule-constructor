import { useTranslation } from "react-i18next"
import { formatTimeString } from "../../../core/utils/stringUtils"
import { StyledClassScheduleCard } from "./ClassScheduleCard.styled"

interface IProps {
	length: number,
	start: string,
	end: string,
	name: string
}

const ClassScheduleCard: React.FC<IProps> = ({ length, start, end, name }) => {
  const { t } = useTranslation()

	return (
		<StyledClassScheduleCard className="class-schedule-card">
			<header>
				{name}
			</header>
			<div className="details">
				<div>{t("classScheduleCard.classesAmount")} <span className="value">{length}</span></div>
				<div>{t("classScheduleCard.start")} <span className="value">{ formatTimeString(start) }</span></div>
				<div>{t("classScheduleCard.end")} <span className="value">{ formatTimeString(end) }</span></div>
			</div>
		</StyledClassScheduleCard>
	)
}

export default ClassScheduleCard
