import InputWrapper from "../../components/wrappers/InputWrapper/InputWrapper"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import Button from "../../components/ui/Button/Button"
import { FormProvider, useForm } from "react-hook-form"
import { StyledAddLesson } from "./AddLesson.styled"
import Select from "../../components/ui/Select/Select"

const AddLesson = () => {
	const methods = useForm({defaultValues: {
		title: "",
		teacher: "",
		cabinet: ""
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
								placeholder="Основы алгоритмизации"
								registerName="title"
								registerOptions={{required: true}}
								className="title"
							/>
							<InputWrapper
								caption="Имя препода"
								placeholder="Иванов Иван Иванович"
								registerName="teacher"
								registerOptions={{required: true}}
								className="teacher"
							/>
							<InputWrapper
								caption="Кабинет"
								placeholder="302у"
								registerName="cabinet"
								registerOptions={{required: true}}
								className="cabinet"
							/>

							{
								Object.keys(methods.formState.errors).length !== 0 
									&&
								<p className="error-message">Все поля должны быть заполнены!</p>
							}

							<Button type="submit">Готово</Button>
						</form>
					</FormProvider>
			</Container>
		</StyledAddLesson>
	)
}

export default AddLesson
