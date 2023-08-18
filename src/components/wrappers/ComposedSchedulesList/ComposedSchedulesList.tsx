import { observer } from "mobx-react"
import { Link } from "react-router-dom"

import { IComposedSchedule } from "../../../core/types/types"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import ComposedSchedule from "../../smart/ComposedSchedule/ComposedSchedule"
import GhostButton from "../../ui/GhostButton/GhostButton"

import { StyledComposedSchedulesList } from "./ComposedSchedulesList.styles"
import { lableConfigs } from "../../../core/constants/constants"

interface IProps {
  composedSchedules: IComposedSchedule[]
  removeSchedule: (uid: string) => boolean
  editSchedule: (uid: string) => void
}

const ComposedSchedulesList: React.FC<IProps> = ({ composedSchedules, removeSchedule, editSchedule }) => {

  const handleRemove = (uid: string) => {
    if (!window.confirm("Are you sure?")) return
    removeSchedule(uid)
  }

  return (
    <StyledComposedSchedulesList className="composed-schedules-list">
      {composedSchedules.length === 0 && (
        <h2 style={{ textAlign: "center", fontWeight: 400 }}>Тут нихера нет ¯\_(ツ)_/¯</h2>
      )}

      {composedSchedules.map((schedule) => (
        <SwipeToAction
          onRightSwipe={() => editSchedule(schedule.uid)}
          onLeftSwipe={() => handleRemove(schedule.uid)}
          lableConfig={lableConfigs.EDIT_DELETE}
          key={schedule.uid}
        >
          <ComposedSchedule
            name={schedule.name}
            days={schedule.days}
          />
        </SwipeToAction>
      ))}

      <Link to="/add/composed">
        <GhostButton>
          Составить новое расписание <br /> <span className="plus">+</span>
        </GhostButton>
      </Link>
    </StyledComposedSchedulesList>
  )
}

export default observer(ComposedSchedulesList)
