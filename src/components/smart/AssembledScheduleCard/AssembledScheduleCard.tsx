import { useContext } from "react"
import { StoreContext } from "../../.."
import { IAssembledDay } from "../../../core/types/types"
import { StyledAssembledSchedule } from "./AssembledScheduleCard.styled"

import Day from "./Day/Day"
import Switch from "../../ui/Switch/Switch"
import { observer } from "mobx-react"

interface IProps {
	name: string,
	days: IAssembledDay[]
  uid: string
}

const AssembledScheduleCard: React.FC<IProps> = ({ name, days, uid }) => {

  const { assembledSchedulesStore } = useContext(StoreContext)
  const thisIsActive = assembledSchedulesStore.activeScheduleUid === uid

  const handleActivation = () => {
    assembledSchedulesStore.activateSchedule(uid)
  }

  return (
		<StyledAssembledSchedule className="assembled-schedule">
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
		</StyledAssembledSchedule>
	)
}

export default observer(AssembledScheduleCard)
