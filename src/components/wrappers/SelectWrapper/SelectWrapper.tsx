import { SelectItem, SelectProps } from "@mantine/core"
import React from "react"
import { Controller, useFormContext } from "react-hook-form"
import Select from "../../ui/Select/Select"

interface IProps {
	data: (string | SelectItem)[],
	registerName: string,
	index: number
}

const SelectWrapper: React.FC<IProps & SelectProps> = ({ data, registerName, index, ...rest }) => {
	const methods = useFormContext()

	return (
		<Controller
			name={`${registerName}.${index}`}
			control={methods.control}
			render={({ field: { onChange, onBlur, value, ref }}) => (
			<Select
				onChange={onChange}
				onBlur={onBlur}
				value={value}
				ref={ref}
				data={data}
				{...rest}
			/>
		)}
	/>
	)
}

export default SelectWrapper
