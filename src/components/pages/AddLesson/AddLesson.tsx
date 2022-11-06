import Container from "../../Container/Container"
import HeaderSecondary from "../../Header/HeaderSecondary"
import Input from "../../Input/Input"
import { StyledAddLesson } from "./AddLesson.styled"

const AddLesson = () => {
  return <>
    <HeaderSecondary />
    <Container>
      <StyledAddLesson>
        <div className="wrapper">
          <Input
          className="lesson_name"
          caption="Название пары"
          placeholder="Уззкий язык"
          />
          <div className="same_line">

          <Input
            className="teacher_name"
            caption="Имя препода"
            placeholder="Cтарый хуй"
            />
          <Input
            className="cabinet"
            caption="Кабинет"
            placeholder="403у"
            />
          </div>
        </div>
      </StyledAddLesson>
    </Container>
  </>
}

export default AddLesson