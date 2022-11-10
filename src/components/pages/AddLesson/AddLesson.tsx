import { memo, useContext } from "react"
import { StoreContext } from "../../.."

import * as Yup from "yup"
import { useFormik } from "formik"
import { toast } from "react-toastify"
import { normalizeValues } from "../../../utils/helpers"

import HeaderSecondary from "../../Header/HeaderSecondary"
import ActionButton from "../../ActionButton/ActionButton"
import Container from "../../Container/Container"
import Input from "../../Input/Input"

import { StyledAddLessonPage } from "./AddLesson.styled"
import 'react-toastify/dist/ReactToastify.css';


const AddLesson = () => {
	const { lessonsStore } = useContext(StoreContext)

  const formik = useFormik({
    initialValues: {
      cabinet: '',
      teacher_name: '',
      lesson_name: ''
    },
    validationSchema: Yup.object({
      lesson_name: Yup.string().transform(i => i.trim()).required('Названия у пары нету?))'),
      teacher_name: Yup.string().transform(i => i.trim()).required('Его имя нельзя называть?))'),
      cabinet: Yup.string().transform(i => i.trim()).required('Обязательное поле')
    }),
    onSubmit() {
			const { cabinet, lesson_name, teacher_name} = normalizeValues<typeof formik.values>(formik.values)

			const success = lessonsStore.addLesson(cabinet, teacher_name, lesson_name)

			success ?
				toast.success('Успешно добавлено!', {
					position: "top-right",
					autoClose: 1000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					theme: "colored",
				}) :
				toast.error('Добавить не удалось!', {
					position: "top-right",
					autoClose: 1000,
					hideProgressBar: true,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					theme: "colored",
				})

			formik.resetForm()
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
          errors={formik.errors}
          touched={formik.touched}
					value={formik.values.lesson_name}
				/>
				<Input
					id="teacher_name"
					name="teacher_name"
					caption="Имя препода"
					placeholder="Старый хуй"
					onChange={formik.handleChange}
          errors={formik.errors}
          touched={formik.touched}
					value={formik.values.teacher_name}
				/>
				<Input
					id="cabinet"
					name="cabinet"
					caption="Кабинет"
					placeholder="104п"
					onChange={formik.handleChange}
          errors={formik.errors}
          touched={formik.touched}
					value={formik.values.cabinet}
				/>
				<ActionButton type="submit" className="submit_button">
					Готово
				</ActionButton>
      </StyledAddLessonPage>
    </Container>
  </>
}

export default memo(AddLesson)