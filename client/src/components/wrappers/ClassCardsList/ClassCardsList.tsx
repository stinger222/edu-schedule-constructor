import { observer } from "mobx-react"
import { Link, useNavigate } from "react-router-dom"
import { Trans, useTranslation } from "react-i18next"

import { IClass } from "../../../core/types/types"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import GhostButton from "../../ui/GhostButton/GhostButton"
import ClassCard from "../../ordinary/ClassCard/ClassCard"
import Loader from "../../ordinary/Loader/Loader"

import { StyledClassCardsList } from "./ClassCardsList.styled"

interface IProps {
	classes: IClass[]
	removeClass: (uid: string) => boolean,
  isLoading: boolean
}

const ClassCardsList = ({ classes, removeClass, isLoading }: IProps) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

	const handleRemove = (uid: string) => {
		if (!window.confirm(t("confirmPrompt.deleteCard"))) return
		removeClass(uid)
	}

  const handleEdit = (uid: string) => {
    navigate("/add/class", {state: { mode: "edit", uid }})    
  }

  if (isLoading) return <Loader />

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

export default observer(ClassCardsList)
