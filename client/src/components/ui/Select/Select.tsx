import { SelectProps } from "@mantine/core"
import React from "react"
import { StyledSelect } from "./Select.styled"


const Select = (props: SelectProps) => {
	return (
		<StyledSelect {...props} size="1em"/>
	)
}

export default Select