import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form"
import Input from "../../ui/Input/Input"

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string,
	name?: string,
	rules?: RegisterOptions<FieldValues, string>
} 

/**
 * This is container for Input component.
 * 
 * As all other wrappers, it can be used ONLY inside FormProvider.
 * 
 * @param name - name for "@react-hook-form" that used for registration
 * @param data - data to show in dropdown
*/

const InputContainer = ({ name, rules, label, ...rest }: IProps) => {
	const methods = useFormContext()

	return (
		<Input
			label={label}
			{...methods?.register(name || "value" , rules )}
			{...rest}
		/>
	)
}

export default InputContainer
