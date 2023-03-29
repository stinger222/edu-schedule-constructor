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

	const validValue = /^[0-9]{2}:[0-9]{2}$/
	if (validValue.test(startTime) && validValue.test(endTime)) {
		if (new Date(`1/1/2000 ${startTime}`) > new Date(`1/1/2000 ${endTime}`)) { // if startTime bigger that endTime...
			[startTime, endTime] = [endTime, startTime] // ...swap them
		}
	}

	return (
		<StyledTimeline className={active ? 'active' : ''}>
			<div className="caption">
				<div className="caption-start">{ startTime }</div>
				<div className="caption-end">{ endTime }</div>
			</div>
			<div className="progress-bar-body">
				<div className="indicator"></div>
				<div className="line"></div>
			</div>
		</StyledTimeline>
	)
}

export default React.memo(Timeline)
