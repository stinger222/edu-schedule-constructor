import { useContext } from "react"
import { StoreContext } from "../.."
import { WeekDays } from "../../core/utils/helpers"
import { Cases, IComposedSchedule } from "../../core/types/types"
import { StyledAddComposedSchedule } from "./AddComposedSchedule.styled"

import { FormProvider, useFieldArray, useForm } from "react-hook-form"

import Button from "../../components/ui/Button/Button"
import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ComposeDay from "../../components/smart/ComposeDay/ComposeDay"
import GhostButton from "../../components/ui/GhostButton/GhostButton"
import InputWrapper from "../../components/containers/InputContainer/InputContainer"
import { toJS } from "mobx"

const AddComposedSchedule = () => {
	const methods = useForm({
		defaultValues: {
			name: '',
			days: [{ ringsScheduleId: '', lessonIds: ['undefined'] }]
		}, shouldFocusError: false
	})

	const { fields, append } = useFieldArray({ control: methods.control, name: 'days' })

	const { composedSchedulesStore } = useContext(StoreContext)

	const handleSubmit = (formData: Omit<IComposedSchedule, 'uid'>) => {
		composedSchedulesStore.addSchedule(formData)
		console.log(toJS(composedSchedulesStore.composedSchedules));
		
		methods.reset()
	}

	return (
		<StyledAddComposedSchedule>
			<Container>
				<Header>
					<Header.NavHome />
					<h1> Составить новое расписание </h1>
					<Header.BurgerButton />
				</Header>

				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(handleSubmit)}>

						<InputWrapper
							name="name"
							label="Название расписания"
							placeholder="Верхняя неделя"
							rules={{required: 'Название расписания не указано!'}}
						/>

						{
							fields.map((_, index) => (
								<ComposeDay dayIndex={index} key={index}/>
							))
						}

						{fields.length < 5 && <>
							<h2>{WeekDays.getFull(Cases.Nominative)[fields.length]}:</h2>
							<GhostButton onClick={() => append({ ringsScheduleId: '', lessonIds: ['undefined'] })}>
								Заполнить расписание на {WeekDays.getFull(Cases.Accusative, true)[fields.length]}
								<br />
								<span className="plus">+</span>
							</GhostButton>
						</>
						}

						<Button
							type="submit"
							disabled={(!methods.formState.isValid) /*|| (fields.length < 5)*/}
						>Готово</Button>
					</form>
				</FormProvider>

			</Container>
		</StyledAddComposedSchedule>
	)
}

export default AddComposedSchedule
