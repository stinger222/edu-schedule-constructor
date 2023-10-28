import { useTranslation } from "react-i18next"
import { capitalize, formatTimeString } from "../../../core/utils/stringUtils"
import { StyledClassScheduleCard } from "./ClassScheduleCard.styled"

interface IProps {
	length: number,
	start: string,
	end: string,
	title: string
}

const ClassScheduleCard = ({ length, start, end, title }: IProps) => {
  const { t } = useTranslation()

	return (
		<StyledClassScheduleCard className="class-schedule-card">
			<header className="max-lines-2" data-testid="card-title">
				{capitalize(title) || "<Untitled Class Schedule>"}
			</header>
			<div className="details">
				<div>
          {t("classScheduleCard.classesAmount")}
          <span className="value" data-testid="classes-amount"> {length || "?"}</span>
        </div>
				<div>
          {t("classScheduleCard.start")}
          <span className="value" data-testid="start-time"> { formatTimeString(start) }</span>
        </div>
				<div>
          {t("classScheduleCard.end")}
          <span className="value" data-testid="end-time"> { formatTimeString(end) }</span>
        </div>
			</div>
		</StyledClassScheduleCard>
	)
}

export default ClassScheduleCard
