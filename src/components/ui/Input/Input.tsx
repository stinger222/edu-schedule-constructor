import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form"
import { StyledInput } from "./Input.styled"
interface IProps {
	caption?: string,
	onChange?: () => void,
	type?: "submit" | "text" | "time",
	registerName?: string,
	registerOptions?: RegisterOptions<FieldValues, string>
} 

const Input: React.FC<IProps> = ({ caption, type = 'text', onChange, registerName, registerOptions }) => {
	const { register } = useFormContext()

	return (
		<StyledInput>
			<span className="caption">{caption}</span>
			<input
				{...register(registerName || 'value' , registerOptions)}
				type={type}
				onChange={onChange}
			/>
		</StyledInput>
	)
}

export default Input