import Icon from "../../components/ordinary/Icon/Icon"
import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import TimeRange from "../../components/ordinary/TimeRange/TimeRange"
import Container from "../../components/containers/Container/Container"

import { StyledAddRingsSchedule } from "./AddRingsSchedule.styled"
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';

const AddRingsSchedule = () => {
	const methods = useForm({
		defaultValues: {
			ranges: [
				{
					start: '08:40',
					end: '10:00'
				}
			]
		}
	})
	const { append, remove, fields } = useFieldArray({control: methods.control, name: 'ranges' })

	return (
		<Container>
			<StyledAddRingsSchedule>
				<Header>
					<Header.NavHome/>
					<h1>Добавить расписание звонков</h1>
					<Header.BurgerButton/>
				</Header>

				<FormProvider {...methods}>
					<form onSubmit={ methods.handleSubmit(() => console.log(fields)) }>
						{fields.map(({ id }, index) => (
							<TimeRange index={index} key={id}/>
						))}

						<Button className="append-range" onClick={() => append({start: '', end: ''})}>
							<Icon fill="white" name="Plus"/>
						</Button>

						<Button type="submit">Готово</Button>
					</form>
				</FormProvider>

			</StyledAddRingsSchedule>
		</Container>
	)
}

export default AddRingsSchedule