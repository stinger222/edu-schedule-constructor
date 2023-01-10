import React from "react"
import { Replacements } from "../../../core/types/types"
import { StyledProgressBar } from "./ProgressBar.styled"
import { formatTimeString, replaceBlankProps } from "../../../core/utils/helpers"

interface IProps {
	startTime: string,
	endTime: string
}

const propsReplacements: Replacements<IProps> = {
	startTime: "??:??",
	endTime: "??:??"
}

const ProgressBar: React.FC<IProps> = (props) => {
	let { startTime, endTime } = replaceBlankProps<IProps>(props, propsReplacements)

	startTime = formatTimeString(startTime)
	endTime = formatTimeString(endTime)

	const validValue = /^[0-9]{2}:[0-9]{2}$/
	if (validValue.test(startTime) && validValue.test(endTime)) {
		if (new Date(`1/1/2000 ${startTime}`) > new Date(`1/1/2000 ${endTime}`)) { // if startTime bigger that endTime...
			[startTime, endTime] = [endTime, startTime] // ...swap them
		}
	}

	return (
		<StyledProgressBar>
			<div className="caption">
				<div className="caption_start">{ startTime }</div>
				<div className="caption_end">{ endTime }</div>
			</div>
			<div className="progress_bar_body">
				<div className="indicator"></div>
				<div className="line"></div>
			</div>
		</StyledProgressBar>
	)
}

export default React.memo(ProgressBar)
