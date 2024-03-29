import { observer } from "mobx-react"
import { useContext } from "react"

import Day from "./Day/Day"
import Switch from "../../ui/Switch/Switch"
import { StoreContext } from "../../.."
import { IAssembledDay } from "../../../core/types/types"
import { StyledAssembledSchedule } from "./AssembledScheduleCard.styled"

interface IProps {
	name: string,
	days: IAssembledDay[]
  uid: string
}

const AssembledScheduleCard = ({ name, days, uid }: IProps) => {
  const { assembledSchedulesStore } = useContext(StoreContext)
  const thisIsActive = assembledSchedulesStore.activeScheduleUid === uid

  const handleActivation = () => {
    assembledSchedulesStore.activateSchedule(uid)
  }

  return (
		<StyledAssembledSchedule className="assembled-schedule">
			<header>
        <div className="title max-lines-2">{ name }</div>
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
		</StyledAssembledSchedule>
	)
}

export default observer(AssembledScheduleCard)
