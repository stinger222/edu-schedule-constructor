import { FormProvider, useForm } from "react-hook-form"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import Button from "../../components/ui/Button/Button"
import InputWrapper from "../../components/wrappers/InputWrapper/InputWrapper"
import { StyledAddLesson } from "./AddLesson.styled"

const AddLesson = () => {
	const methods = useForm({defaultValues: {
		dick1: 'dick 1',
	}})

	return (
		<StyledAddLesson>
			<Container>
				<Header>
						<Header.NavHome/>
						<h1> Добавить предмет </h1>
						<Header.BurgerButton/>
					</Header>

					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(console.log)}>
							<InputWrapper
								caption="Название пары"
								placeholder="Информационные Технологии"
								registerName="title"
								className="title"
							/>
							<InputWrapper
								caption="Имя препода"
								placeholder="Иванов Иван Иванович"
								registerName="teacher"
								className="teacher"
							/>
							<InputWrapper
								caption="Кабинет"
								placeholder="302у"
								registerName="cabinet"
								className="cabinet"
							/>
							
							<Button type="submit">Готово</Button>
						</form>
					</FormProvider>
			</Container>
		</StyledAddLesson>
	)
}

export default AddLesson
