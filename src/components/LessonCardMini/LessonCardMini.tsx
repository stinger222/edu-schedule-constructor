import { ILesson } from "../../stores/interfaces"
import { StyledLessonCardMini } from "./LessonCardMini.styled"

interface IProps {
  lesson: ILesson
}

const LessonCardMini: React.FC<IProps> = ({ lesson }) => {
  return <StyledLessonCardMini>
    <div className="header">{ lesson.lesson_name }</div>
    <div className="footer">
      <span>{lesson.teacher}</span>
      <span>{lesson.cabinet}</span>
    </div>
  </StyledLessonCardMini>
  
}

export default LessonCardMini