import { StyledTimeRange } from "./TimeRange.styled"
import InputContainer from "../../containers/InputContainer/InputContainer"
import { useTranslation } from "react-i18next"

interface IProps {
	index: number
}

const TimeRange = ({ index }: IProps) => {
  const { t } = useTranslation()

	return (
		<StyledTimeRange>
			<InputContainer
				type="time"
				label={t("addClassScheduleForm.startInputcaption")}
				name={`classes.${index}.start` as const}
				rules={{required: true}}
			/>

			<span className="divider">
				<div className="label"> {t("addClassScheduleForm.dividerCaption", {value: index + 1})}</div>
				<div className="line"></div>
			</span>

			<InputContainer
				type="time"
				label={t("addClassScheduleForm.endInputCaption")}
				name={`classes.${index}.end` as const}
				rules={{required: true}}
			/>
		</StyledTimeRange>
	)
}

export default TimeRange