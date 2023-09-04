import { Link } from "react-router-dom"
import { observer } from "mobx-react"
import { IRingsSchedule } from "../../../core/types/types"
import { StyledRingsCardsList } from "./RingsCardsList.styled"

import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import RingsScheduleCard from "../../ordinary/RingsScheduleCard/RingsScheduleCard"
import GhostButton from "../../ui/GhostButton/GhostButton"
import { useTranslation } from "react-i18next"

interface IProps {
	ringsSchedules: IRingsSchedule[],
	removeSchedule: (uid: string) => boolean
}

const RingsCardsList: React.FC<IProps> = ({ ringsSchedules, removeSchedule }) => {
  const { t } = useTranslation()

  const handleRemove = (uid: string) => {
    if (!window.confirm(t("confirmPrompt.deleteCard"))) return
    removeSchedule(uid)
  }
return (
    <StyledRingsCardsList className="rings-cards">
    {	ringsSchedules?.length === 0 &&
      <h2 style={{textAlign: "center", fontWeight: 400}}>
        Тут нихера нет ¯\_(ツ)_/¯
      </h2>
    }

    {
      ringsSchedules.map(({rings, name, uid}) => (
        <SwipeToAction
          onLeftSwipe={() => handleRemove(uid)}
          RightActionLabel={SwipeToAction.RemoveActionLabel}
          key={uid}
        >
          <RingsScheduleCard
            start={rings[0].start}
            end={rings[rings.length-1].end}
            length={rings.length}
            name={name}
          />
        </SwipeToAction>
      ))
    }

    <Link to="/add/rings">
      <GhostButton> {t("ghostButton.addRingsSchedule")} <span className="plus">+</span></GhostButton>
    </Link>
  </StyledRingsCardsList>
  )
}

export default observer(RingsCardsList)
