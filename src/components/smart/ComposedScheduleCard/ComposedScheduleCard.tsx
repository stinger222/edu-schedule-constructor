import { useContext } from "react"
import { StoreContext } from "../../.."
import { IComposedDay } from "../../../core/types/types"
import { StyledComposedSchedule } from "./ComposedScheduleCard.styled"

import Day from "./Day/Day"
import Switch from "../../ui/Switch/Switch"

interface IProps {
	name: string,
	days: IComposedDay[]
  uid: string
}

const ComposedSchedule: React.FC<IProps> = ({ name, days, uid }) => {

  const { composedSchedulesStore } = useContext(StoreContext)
  const thisIsActive = composedSchedulesStore.activeScheduleUid === uid

  const handleActivation = () => {
    composedSchedulesStore.activateSchedule(uid)
  }

  return (
		<StyledComposedSchedule className="composed-schedule">
			<header>
        <div className="title">{ name }</div>
        <Switch type="checkbox" onChange={handleActivation} checked={thisIsActive} />
      </header>
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
