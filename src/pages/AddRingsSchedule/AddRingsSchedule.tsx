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

	const { append, fields } = useFieldArray({control: methods.control, name: 'ranges' })

	return (
		<StyledAddRingsSchedule>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1>Добавить расписание звонков</h1>
					<Header.BurgerButton/>
				</Header>

				<FormProvider {...methods}>
					<form onSubmit={ methods.handleSubmit(() => console.log(methods.getValues())) }>
						{fields.map(({ id }, index) => (
							<TimeRange index={index} key={id}/>
						))}

						{ fields.length < 9
								?
							<Button className="append" onClick={() => append({start: '', end: ''})}>
								<Icon fill="white" name="Plus"/>
							</Button> 
								:
							<div style={{textAlign: 'center', fontSize: '1.2em', marginBottom: '1em'}}> а ой))))) 👉👈 </div>
						}

						<Button type="submit">Готово</Button>
					</form>
				</FormProvider>

			</Container>
		</StyledAddRingsSchedule>
	)
}

export default AddRingsSchedule