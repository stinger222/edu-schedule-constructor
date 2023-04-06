import { StyledAddComposedSchedule } from "./AddComposedSchedule.styled"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"

import { Cases } from "../../core/types/types"
import { WeekDays } from "../../core/utils/helpers"

import Header from "../../components/smart/Header/Header"
import Container from "../../components/containers/Container/Container"
import ComposeDay from "../../components/smart/ComposeDay/ComposeDay"
import GhostButton from "../../components/ui/GhostButton/GhostButton"
import Button from "../../components/ui/Button/Button"

const AddComposedSchedule = () => {
	const methods = useForm({
		defaultValues: {
			days: [{ ringsScheduleId: '', lessonIds: ['undefined'] }]
		}
	})

	const { fields, append } = useFieldArray({ control: methods.control, name: 'days' })

	return (
		<StyledAddComposedSchedule>
			<Container>
				<Header>
					<Header.NavHome />
					<h1> Составить новое расписание </h1>
					<Header.BurgerButton />
				</Header>

				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(console.log)}>

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
							disabled={!methods.formState.isValid}
						>Готово</Button>
					</form>
				</FormProvider>

			</Container>
		</StyledAddComposedSchedule>
	)
}

export default AddComposedSchedule
