import React from "react"
import { StyledProgressBar } from "./ProgressBar.styled"

interface IProps {
	startTime: string,
	endTime: string
}

const ProgressBar: React.FC<IProps> = ({ startTime, endTime }) => {
	return (
		<StyledProgressBar>
			<div className="caption">
				<div className="caption_start">09:00</div>
				<div className="caption_end">10:10</div>
			</div>
			<div className="progress_bar_body">
				<div className="indicator"></div>
				<div className="line"></div>
			</div>
		</StyledProgressBar>
	)
}

export default React.memo(ProgressBar)
