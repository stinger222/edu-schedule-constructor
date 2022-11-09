import { useFormik } from "formik"
import Container from "../../Container/Container"
import HeaderSecondary from "../../Header/HeaderSecondary"
import Input from "../../Input/Input"
import { StyledAddLessonPage } from "./AddLesson.styled"
import * as Yup from "yup"
import { memo } from "react"

const AddLesson = () => {
  const formik = useFormik({
    initialValues: {
      cabinet: '',
      teacher_name: '',
      lesson_name: ''
    },
    validationSchema: Yup.object({
      cabinet: Yup.mixed().required('required')
    }),
    onSubmit() {
      console.log('submitted');
    }
  })

  return <>
    <HeaderSecondary />
    <Container>
      <StyledAddLessonPage onSubmit={formik.handleSubmit}>
      <Input
				id="lesson_name"
				name="lesson_name"
				caption="Название пары"
				placeholder="Уззкий язык"
				onChange={formik.handleChange}
				value={formik.values.lesson_name}
      />
			<Input
				id="teacher_name"
				name="teacher_name"
				caption="Имя препода"
				placeholder="Старый хуй"
				onChange={formik.handleChange}
				value={formik.values.teacher_name}
			/>
			<Input
				id="cabinet"
				name="cabinet"
				caption="Кабинет"
				placeholder="104п"
				onChange={formik.handleChange}
				value={formik.values.cabinet}
			/>
      </StyledAddLessonPage>
    </Container>
  </>
}

export default memo(AddLesson)