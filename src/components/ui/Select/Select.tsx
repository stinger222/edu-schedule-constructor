import { SelectItem, SelectProps } from "@mantine/core"
import React from "react"
import { StyledSelect } from "./Select.styled"

interface IProps {
	onChange?(value: string | null): void,
	onBlur?: React.FocusEventHandler<HTMLInputElement>,
	defaultValue?: string | null | undefined,
	ref?: React.Ref<HTMLInputElement>,
	data: (string | SelectItem)[]
}

const Select: React.FC<IProps & SelectProps> = React.forwardRef(({
	onChange,
	onBlur,
	data,
	defaultValue,
	...rest
}, ref) => {
	return (
		<StyledSelect
			size="1em"
			onChange={onChange}
			onBlur={onBlur}
			defaultValue={defaultValue}
			placeholder="Pick one"
			ref={ref}
			data={data}
			{...rest}
		/>
	)
})

export default Select
