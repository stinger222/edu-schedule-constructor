import InputWrapper from "../../components/containers/InputContainer/InputContainer"
import Container from "../../components/containers/Container/Container"
import Header from "../../components/smart/Header/Header"
import Button from "../../components/ui/Button/Button"
import { FormProvider, useForm } from "react-hook-form"
import { StyledAddLesson } from "./AddLesson.styled"

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
								label="Название пары"
								placeholder="Основы алгоритмизации"
								name="title"
								rules={{required: true}}
								className="title"
							/>
							<InputWrapper
								label="Имя препода"
								placeholder="Иванов Иван Иванович"
								name="teacher"
								rules={{required: true}}
								className="teacher"
							/>
							<InputWrapper
								label="Кабинет"
								placeholder="302у"
								name="cabinet"
								rules={{required: true}}
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
