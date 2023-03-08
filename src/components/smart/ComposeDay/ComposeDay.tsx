import { FormProvider, useFieldArray, useForm } from "react-hook-form"
import { weekDaysRus_full } from "../../../core/constants/constants"
import GhostButton from "../../ui/GhostButton/GhostButton"
import SelectWrapper from "../../wrappers/SelectWrapper/SelectWrapper"
import { StyledComposeDay } from "./ComposeDay.styled"

interface IProps {
	dayIndex: number
}

const ComposeDay: React.FC<IProps> = ({ dayIndex }) => {
	
	const data = [
		{ label: 'Lesson name #1', value:"1" },
		{ label: 'Lesson name #2', value:"2" },
		{ label: 'Lesson name #3', value:"3" },
		{ label: 'Lesson name #4', value:"4" },
	]

	const methods = useForm({defaultValues: {
		[`day_${dayIndex}`]: [{value: ''}]
	}})
	
	const { append, fields } = useFieldArray({control: methods.control, name: `day_${dayIndex}` })

	if (dayIndex >= 5) return

	return (
		<StyledComposeDay>
			<h2>{weekDaysRus_full[dayIndex]}:</h2>

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
								index={index + 1}
								key={index + 1}
								label={`${index + 1}-ая пара`}
								data={data}
							/>
						))
					}

					<br />

					<GhostButton onClick={() => append({ value: '' })}>Добавить {fields.length + 1}-ую пару</GhostButton>
					{/* <button type="submit">Submit</button> */}
				</form>
			</FormProvider>
		</StyledComposeDay>
	)
}

export default ComposeDay
