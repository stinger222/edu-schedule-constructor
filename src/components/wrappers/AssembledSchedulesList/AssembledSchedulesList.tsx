import { observer } from "mobx-react"
import { Link, useNavigate } from "react-router-dom"
import { useTranslation, Trans } from "react-i18next"

import { IAssembledSchedule } from "../../../core/types/types"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import AssembledScheduleCard from "../../smart/AssembledScheduleCard/AssembledScheduleCard"
import GhostButton from "../../ui/GhostButton/GhostButton"

import { StyledAssembledSchedulesList } from "./AssembledSchedulesList.styled"

interface IProps {
  assembledSchedules: IAssembledSchedule[]
  removeSchedule: (uid: string) => boolean
}

const AssembledSchedulesList: React.FC<IProps> = ({ assembledSchedules, removeSchedule }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleRemove = (uid: string) => {
    if (!window.confirm(t("confirmPrompt.deleteCard"))) return
    removeSchedule(uid)
  }

  const handleEdit = (uid: string) => {
    navigate("/add/assembled", {state: { mode: "edit", uid }})    
  }

  return (
    <StyledAssembledSchedulesList className="assembled-schedules-list">
      {assembledSchedules.length === 0 && (
        <h2 className="nothing-here-message">
          ¯\_(ツ)_/¯
          <br/>
          <br/>
          <Trans
            i18nKey="assembledSchedulesPage.nothingHereMsg"
            components={{
              ClassSchLink: <Link className="link" to='/class-schedules' />,
              ClassesLink: <Link className="link" to='/classes' />
            }}
          /> 
      </h2>
      )}
      
      {assembledSchedules.map((schedule) => (
        <SwipeToAction
          onLeftSwipe={() => handleRemove(schedule.uid)}
          onRightSwipe={() => handleEdit(schedule.uid)}
          LeftActionLabel={SwipeToAction.EditActionLabel}
          RightActionLabel={SwipeToAction.RemoveActionLabel}
          key={schedule.uid}
        >
          <AssembledScheduleCard
            name={schedule.name}
            days={schedule.days}
            uid={schedule.uid}
          />
        </SwipeToAction>
      ))}

      <Link to="/add/assembled">
        <GhostButton>
          {t("ghostButton.assembleNewSchedule")} <br /> <span className="plus">+</span>
        </GhostButton>
      </Link>
    </StyledAssembledSchedulesList>
  )
}

export default observer(AssembledSchedulesList)
