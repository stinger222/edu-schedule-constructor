import Icon from "../../components/ordinary/Icon/Icon"
import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import TimeRange from "../../components/ordinary/TimeRange/TimeRange"
import Container from "../../components/containers/Container/Container"

import { StyledAddRingsSchedule } from "./AddRingsSchedule.styled"
import { useForm, useFieldArray, FormProvider } from 'react-hook-form';
import { useContext } from "react"
import { StoreContext } from "../.."
import { IRingsSchedule } from "../../core/types/types"
import { toJS } from "mobx"
import InputWrapper from "../../components/containers/InputContainer/InputContainer"

const AddRingsSchedule = () => {

	const { ringsSchedulesStore } = useContext(StoreContext)

	const methods = useForm({
		defaultValues: {
			name: '',
			rings: [
				{
					start: '08:40',
					end: '10:00'
				}
			]
		}
	})



	const handleSubmit = (formData: any) => {
		// console.log(formData);

		ringsSchedulesStore.addRingsSchedule({
			name: formData.name.trim() || `Расписание №${ringsSchedulesStore.ringsSchedules.length+1}`,
			rings: [...formData.rings]
		})

		console.log(toJS(ringsSchedulesStore.ringsSchedules));
		

		methods.reset()
	}

	const { append, fields } = useFieldArray({control: methods.control, name: 'rings' })

	return (
		<StyledAddRingsSchedule>
			<Container>
				<Header>
					<Header.NavHome/>
					<h1>Добавить расписание звонков</h1>
					<Header.BurgerButton/>
				</Header>

				<FormProvider {...methods}>
					<form onSubmit={ methods.handleSubmit(handleSubmit) }>
						<InputWrapper
							name="name"
							label="Название расписания"
							placeholder="Звонки на понедельник"
						/>

						<span style={{color: 'red'}}> Make me responsive, bitch!</span>

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