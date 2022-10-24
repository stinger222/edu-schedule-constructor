import { memo } from "react"
import HeaderSecondary from "../../Header/HeaderSecondary"
import ComposedSchedulesList from "./ComposedSchedulesList"

const ComposedSchedules = () => {
	return <>
		<HeaderSecondary />
		<ComposedSchedulesList />	
	</>
}

export default memo(ComposedSchedules)
