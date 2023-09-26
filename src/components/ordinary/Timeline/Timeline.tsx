import React from "react"
import { StyledTimeline } from "./Timeline.styled."
import { formatTimeString } from "../../../core/utils/stringUtils"
import { isDateInRange, parseTimeStringToDate } from "../../../core/utils/dateTimeUtils"

interface IProps {
	startTime: string,
	endTime: string,
}

const Timeline = ({ startTime, endTime }: IProps) => {
	startTime = formatTimeString(startTime)
	endTime = formatTimeString(endTime)

  const startDate = parseTimeStringToDate(startTime)
  const endDate = parseTimeStringToDate(endTime)

  const isActive = isDateInRange(new Date, startDate, endDate)

	return (
		<StyledTimeline className={isActive ? "active" : ""}>
			<div className="label">
				<div className="label-start">{ startTime }</div>
				<div className="label-end">{ endTime }</div>
			</div>
			<div className="progress-bar-body">
				<div className="indicator"></div>
				<div className="line"></div>
			</div>
		</StyledTimeline>
	)
}

export default React.memo(Timeline)
