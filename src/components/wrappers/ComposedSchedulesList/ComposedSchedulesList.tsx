import { observer } from "mobx-react"
import { Link, useNavigate } from "react-router-dom"

import { IComposedSchedule } from "../../../core/types/types"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import ComposedSchedule from "../../smart/ComposedScheduleCard/ComposedScheduleCard"
import GhostButton from "../../ui/GhostButton/GhostButton"

import { StyledComposedSchedulesList } from "./ComposedSchedulesList.styled"
import { useTranslation } from "react-i18next"

interface IProps {
  composedSchedules: IComposedSchedule[]
  removeSchedule: (uid: string) => boolean
}

const ComposedSchedulesList: React.FC<IProps> = ({ composedSchedules, removeSchedule }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleRemove = (uid: string) => {
    if (!window.confirm(t("confirmPrompt.deleteCard"))) return
    removeSchedule(uid)
  }

  const handleEdit = (uid: string) => {
    navigate("/add/composed", {state: { mode: "edit", uid }})    
  }

  return (
    <StyledComposedSchedulesList className="composed-schedules-list">
      {composedSchedules.length === 0 && (
        <h2 style={{ textAlign: "center", fontWeight: 400 }}>Тут нихера нет ¯\_(ツ)_/¯</h2>
      )}
      
      {composedSchedules.map((schedule) => (
        <SwipeToAction
          onLeftSwipe={() => handleRemove(schedule.uid)}
          onRightSwipe={() => handleEdit(schedule.uid)}
          LeftActionLabel={SwipeToAction.EditActionLabel}
          RightActionLabel={SwipeToAction.RemoveActionLabel}
          key={schedule.uid}
        >
          <ComposedSchedule
            name={schedule.name}
            days={schedule.days}
            uid={schedule.uid}
          />
        </SwipeToAction>
      ))}

      <Link to="/add/composed">
        <GhostButton>
          {t("headerTitle.addComposedSchedule")} <br /> <span className="plus">+</span>
        </GhostButton>
      </Link>
    </StyledComposedSchedulesList>
  )
}

export default observer(ComposedSchedulesList)
