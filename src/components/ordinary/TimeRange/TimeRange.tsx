import { StyledTimeRange } from "./TimeRange.styled"
import InputWrapper from "../../containers/InputContainer/InputContainer"
import { useTranslation } from "react-i18next"

interface IProps {
	index: number
}

const TimeRange: React.FC<IProps> = ({ index }) => {
  const { t } = useTranslation()

	return (
		<StyledTimeRange>
			<InputWrapper
				type="time"
				label={t("addRingsScheduleForm.startInputcaption")}
				name={`rings.${index}.start` as const}
				rules={{required: true}}
			/>

			<span className="divider">
				<div className="label"> {t("addRingsScheduleForm.dividerCaption", {value: index + 1})}</div>
				<div className="line"></div>
			</span>

			<InputWrapper
				type="time"
				label={t("addRingsScheduleForm.endInputcaption")}
				name={`rings.${index}.end` as const}
				rules={{required: true}}
			/>
		</StyledTimeRange>
	)
}

export default TimeRange