import React from "react"
import { StyledTimeline } from "./Timeline.styled."
import { formatTimeString } from "../../../core/utils/stringUtils"

interface IProps {
	startTime: string,
	endTime: string,
	active?: boolean
}

const Timeline: React.FC<IProps> = ({ startTime, endTime, active }) => {
	startTime = formatTimeString(startTime)
	endTime = formatTimeString(endTime)

	return (
		<StyledTimeline className={active ? "active" : ""}>
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
