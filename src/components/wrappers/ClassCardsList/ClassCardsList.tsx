import { Link, useNavigate } from "react-router-dom"

import { IClass } from "../../../core/types/types"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import ClassCard from "../../ordinary/ClassCard/ClassCard"
import GhostButton from "../../ui/GhostButton/GhostButton"

import { StyledClassCardsList } from "./ClassCardsList.styled"
import { Trans, useTranslation } from "react-i18next"

interface IProps {
	classes: IClass[]
	removeClass: (uid: string) => boolean 
}

const ClassCardsList = ({ classes, removeClass }: IProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

	const handleRemove = (uid: string) => {
		if (!window.confirm(t("confirmPrompt.deleteCard"))) return
		removeClass(uid)
	}

  const handleEdit = (uid: string) => {
    navigate("/add/class", {state: { mode: "edit", uid }})    
  }

	return (
		<StyledClassCardsList className="class-cards-list">

			{ classes.length === 0 &&
        <h2 className="nothing-here-message">
          ¯\_(ツ)_/¯
          <br/>
          <br/>
          <Trans
            i18nKey="classesPage.nothingHereMsg"
            components={{Link: <Link className="link" to='/assembled' />}}
          /> 
        </h2>
			}

			{
				classes.map(cls => (
					<SwipeToAction
            onLeftSwipe={() => handleRemove(cls.uid)}
            onRightSwipe={() => handleEdit(cls.uid)}
            RightActionLabel={SwipeToAction.RemoveActionLabel}
            LeftActionLabel={SwipeToAction.EditActionLabel}
            key={cls.uid}
          >
						<ClassCard 
							cabinet={cls.cabinet}
							teacher={cls.teacher}
							title={cls.title}
						/>
					</SwipeToAction>
				))
			}
      
			<Link to="/add/class">
				<GhostButton> {t("ghostButton.addClass")} <span className="plus">+</span></GhostButton>
			</Link>
		</StyledClassCardsList>
	)
}

export default ClassCardsList
