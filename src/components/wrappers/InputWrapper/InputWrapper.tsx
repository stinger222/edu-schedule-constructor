import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form"
import Input from "../../ui/Input/Input"

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	caption?: string,
	registerName?: string,
	registerOptions?: RegisterOptions<FieldValues, string>
} 

const InputWrapper: React.FC<IProps> = ({ registerName, registerOptions, caption, ...rest }) => {
	const { register } = useFormContext()

	return (
		<Input
			{...register(registerName || 'value' , registerOptions)}
			caption={caption}
			{...rest}
		/>
	)
}

export default InputWrapper
