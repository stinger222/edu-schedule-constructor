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
 * As all other containers, it can be used ONLY inside FormProvider.
 * 
 * @param name - name for "@react-hook-form" that used for registration
 * @param data - data to show in dropdown
*/

// TODO: rename wrapper to Container!!
const InputWrapper: React.FC<IProps> = ({ name, rules, label, ...rest }) => {
	const methods = useFormContext()

	return (
		<Input
			label={label}
			{...methods?.register(name || 'value' , rules )}
			{...rest}
		/>
	)
}

export default InputWrapper
