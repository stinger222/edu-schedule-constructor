import { Link, useNavigate } from "react-router-dom"

import { ILesson } from "../../../core/types/types"
import SwipeToAction from "../../containers/SwipeToAction/SwipeToAction"
import LessonCard from "../../ordinary/LessonCard/LessonCard"
import GhostButton from "../../ui/GhostButton/GhostButton"

import { StyledLessonCardsList } from "./LessonCardsList.styled"
import { Trans, useTranslation } from "react-i18next"

interface IProps {
	lessons: ILesson[]
	removeLesson: (uid: string) => boolean 
}

const LessonCardsList: React.FC<IProps> = ({ lessons, removeLesson }) => {
  const navigate = useNavigate()
  const { t } = useTranslation()

	const handleRemove = (uid: string) => {
		if (!window.confirm(t("confirmPrompt.deleteCard"))) return
		removeLesson(uid)
	}

  const handleEdit = (uid: string) => {
    navigate("/add/lesson", {state: { mode: "edit", uid }})    
  }

	return (
		<StyledLessonCardsList className="lesson-cards">

			{ lessons.length === 0 &&
        <h2 className="nothing-here-message">
        ¯\_(ツ)_/¯
        <br/>
        <br/>
        <Trans
          i18nKey="lessonsPage.nothingHereMsg"
          components={{Link: <Link className="link" to='/composed' />}}
        /> 
    </h2>
			}

			{
				lessons.map(lesson => (
					<SwipeToAction
            onLeftSwipe={() => handleRemove(lesson.uid)}
            onRightSwipe={() => handleEdit(lesson.uid)}
            RightActionLabel={SwipeToAction.RemoveActionLabel}
            LeftActionLabel={SwipeToAction.EditActionLabel}
            key={lesson.uid}
          >
						<LessonCard 
							cabinet={lesson.cabinet}
							teacher={lesson.teacher}
							title={lesson.title}
						/>
					</SwipeToAction>
				))
			}
      
			<Link to="/add/lesson">
				<GhostButton> {t("ghostButton.addLesson")} <span className="plus">+</span></GhostButton>
			</Link>
		</StyledLessonCardsList>
	)
}

export default LessonCardsList
