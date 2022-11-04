import { useContext } from "react"
import { StoreContext } from "../../.."
import Container from "../../Container/Container"
import LessonCardMini from "../../LessonCardMini/LessonCardMini"

const LessonsList = () => {

  const { lessonsStore } = useContext(StoreContext)

	return (
    <Container>
      <h1>Lessons list will be here (mini)</h1>

      { lessonsStore.lessons.length !== 0 &&
        lessonsStore.lessons.map(lesson => (
          <LessonCardMini lesson={lesson}/>
        ))
      }
    </Container>
  )
}

export default LessonsList
