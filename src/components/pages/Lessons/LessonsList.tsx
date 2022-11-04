import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../.."
import Container from "../../Container/Container"
import LessonCardMini from "../../LessonCardMini/LessonCardMini"

const LessonsList = () => {
  const { lessonsStore } = useContext(StoreContext)
  const navigate = useNavigate()

  const onAdd = () => {
    navigate('/add/lesson')
  }

	return (
    <Container>
      { lessonsStore.lessons.length !== 0 &&
        lessonsStore.lessons.map(lesson => (
          <LessonCardMini lesson={lesson} key={lesson.id}/>
        ))
      }
      
      <button onClick={onAdd}>
        Добавить
      </button>
    </Container>
  )
}

export default LessonsList
