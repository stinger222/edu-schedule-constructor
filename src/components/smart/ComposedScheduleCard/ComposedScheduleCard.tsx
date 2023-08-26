import { useContext } from "react"
import { StoreContext } from "../../.."
import { IComposedDay } from "../../../core/types/types"
import { StyledComposedSchedule } from "./ComposedScheduleCard.styled"

import Day from "./Day/Day"

interface IProps {
	name: string,
	days: IComposedDay[]
  uid: string
}

const ComposedSchedule: React.FC<IProps> = ({ name, days, uid }) => {

  const { composedSchedulesStore } = useContext(StoreContext)

  const handleActivation = () => {
    composedSchedulesStore.activateSchedule(uid)
  }

  return (
		<StyledComposedSchedule className="composed-schedule">
			<header>{ name }</header>
      <button onClick={handleActivation}>Active</button>
			<div className="days">
				{
					new Array(5).fill(0).map((_, index) => {
						const day = days[index]
						return (
							<Day
								dayIndex={index}
								day={day}
								key={index}
							/>
						)
					})
				}
			</div>
		</StyledComposedSchedule>
	)
}

export default ComposedSchedule
