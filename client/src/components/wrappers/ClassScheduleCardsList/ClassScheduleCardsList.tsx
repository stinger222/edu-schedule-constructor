import { Link, useNavigate } from "react-router-dom"
import { observer } from "mobx-react"
import { IClassSchedule } from "../../../core/types/types"
import { StyledClassScheduleCardsList } from "./ClassScheduleCardsList.styled"

import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import ClassScheduleCard from "../../ordinary/ClassScheduleCard/ClassScheduleCard"
import GhostButton from "../../ui/GhostButton/GhostButton"
import { Trans, useTranslation } from "react-i18next"

interface IProps {
	classSchedules: IClassSchedule[],
	removeSchedule: (uid: string) => boolean
}

const ClassScheduleCardsList= ({ classSchedules, removeSchedule }: IProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleRemove = (uid: string) => {
    if (!window.confirm(t("confirmPrompt.deleteCard"))) return
    removeSchedule(uid)
  }

  const handleEdit = (uid: string) => {
    navigate("/add/class-schedules", {state: { mode: "edit", uid }})    
  }

  return (
    <StyledClassScheduleCardsList className="class-schedule-cards">
    {	classSchedules?.length === 0 &&
        <h2 className="nothing-here-message">
        ¯\_(ツ)_/¯
        <br/>
        <br/>
        <Trans
          i18nKey="classSchedulesPage.nothingHereMsg"
          components={{
            ClassSchLink: <Link className="link" to="/class-schedules" />,
            ClassesLink: <Link className="link" to='/classes' />
          }}
        /> 
    </h2>
    }

    {
      classSchedules.map(({classes, name, uid}) => (
        <SwipeToAction
          onLeftSwipe={() => handleRemove(uid)}
          onRightSwipe={() => handleEdit(uid)}
          RightActionLabel={SwipeToAction.RemoveActionLabel}
          LeftActionLabel={SwipeToAction.EditActionLabel}
          key={uid}
        >
          <ClassScheduleCard
            name={name}
            length={classes.length}
            start={classes[0].start}
            end={classes[classes.length-1].end}
          />
        </SwipeToAction>
      ))
    }

    <Link to="/add/class-schedules">
      <GhostButton> {t("ghostButton.addClassSchedule")} <span className="plus">+</span></GhostButton>
    </Link>
  </StyledClassScheduleCardsList>
  )
}

export default observer(ClassScheduleCardsList)
