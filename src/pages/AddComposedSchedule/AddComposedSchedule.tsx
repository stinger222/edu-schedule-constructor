import { StyledAddComposedSchedule } from "./AddComposedSchedule.styled"
import Container from "../../components/containers/Container/Container"
import Input from "../../components/ui/Input/Input"
import Select from "../../components/ui/Select/Select"
import SelectWrapper from "../../components/wrappers/SelectWrapper/SelectWrapper"
import { FormProvider, useFieldArray, useForm } from "react-hook-form"
import GhostButton from "../../components/ui/GhostButton/GhostButton"

interface IProps {
	dayIndex: number
}

const data = [
	{ label: 'Lesson name #1', value:"1" },
	{ label: 'Lesson name #2', value:"2" },
	{ label: 'Lesson name #3', value:"3" },
	{ label: 'Lesson name #4', value:"4" },

]

const AddComposedSchedule: React.FC<IProps> = ({ dayIndex }) => {

	const methods = useForm({defaultValues: {
		[`day_${dayIndex}`]: [{value: ''}]
	}})
	
	const { append, fields } = useFieldArray({control: methods.control, name: `day_${dayIndex}` })
	return (
		<StyledAddComposedSchedule>

			<Container>
				<div className="compose-day">
					<h2>Понедельник</h2>

					{/* This form mess will be moved to separate component
							So dayIndex will be IT's prop */}
					<FormProvider {...methods}>
						<form onSubmit={methods.handleSubmit(console.log)}>
							<SelectWrapper
								registerName="days"
								index={0}
								key={0}
								label="Расписание звонков для этого дня"
								data={data}
							/>

							<div className="hr-divider"></div>

							{
								fields.map((i, index) => (
									<SelectWrapper
										registerName={`days.${index}.value`}
										index={index+1}
										key={index+1}
										label={`${index+1}-ая пара`}
										data={data}
									/>
								))
							}

							<br />

							<GhostButton onClick={() => append({value: ''})}>Добавить {fields.length + 1}-ую пару</GhostButton>
							{/* <button type="submit">Submit</button> */}
						</form>
					</FormProvider>
				</div>
			</Container>
		</StyledAddComposedSchedule>
	)
}

export default AddComposedSchedule
