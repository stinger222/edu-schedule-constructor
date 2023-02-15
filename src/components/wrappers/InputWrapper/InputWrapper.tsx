import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form"
import Input from "../../ui/Input/Input"

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	caption?: string,
	registerName?: string,
	registerOptions?: RegisterOptions<FieldValues, string>
} 

const InputWrapper: React.FC<IProps> = ({ registerName, registerOptions, caption, ...rest }) => {
	const methods = useFormContext()

	return (
		<Input
			caption={caption}
			{...methods?.register(registerName || 'value' , registerOptions)}
			{...rest}
		/>
	)
}

export default InputWrapper
