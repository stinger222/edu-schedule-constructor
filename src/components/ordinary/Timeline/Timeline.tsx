import React from "react"
import { StyledTimeline } from "./Timeline.styled."
import { Replacements } from "../../../core/types/types"
import { formatTimeString, replaceBlankProps } from "../../../core/utils/helpers"

interface IProps {
	startTime: string,
	endTime: string,
	active?: boolean
}

const propsReplacements: Replacements<IProps> = {
	startTime: "??:??",
	endTime: "??:??",
}

const Timeline: React.FC<IProps> = (props) => {
	let { startTime, endTime, active } = replaceBlankProps<IProps>(props, propsReplacements)
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
