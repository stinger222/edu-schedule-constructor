import { SelectItem, SelectProps } from "@mantine/core"
import React from "react"
import { Controller, useController, useFormContext } from "react-hook-form"
import Select from "../../ui/Select/Select"

interface MySelectItem extends SelectItem {
	label: string
}

interface IProps {
	data: (string | MySelectItem)[],
	registerName: string
}

const SelectContainer: React.FC<IProps & SelectProps> = ({ data, registerName, ...rest }) => {
	const methods = useFormContext()

	const {field: { onChange, onBlur, value, ref }} = useController({
		name: registerName,
		control: methods.control
	})

	return (
		<Select
			onChange={onChange}
			onBlur={onBlur}
			value={value}
			ref={ref}
			data={data}
			{...rest}
		/>
	)
}

export default SelectContainer
