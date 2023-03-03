import { SelectItem } from "@mantine/core"
import React from "react"
import { StyledSelect } from "./Select.styled"

interface IProps {
	onChange?(value: string | null): void,
	onBlur?: React.FocusEventHandler<HTMLInputElement>,
	defaultValue?: string | null | undefined,
	ref?: React.Ref<HTMLInputElement>,
	data: (string | SelectItem)[]
}

const Select: React.FC<IProps> = React.forwardRef((props, ref) => {
	return (
		
		<StyledSelect
			size="1em"
			label="Your favorite framework/library"
			onChange={props.onChange}
			onBlur={props.onBlur}
			defaultValue={props.defaultValue}
			placeholder="Pick one"
			ref={ref}
			data={props.data}
		/>
	)
})

export default Select
