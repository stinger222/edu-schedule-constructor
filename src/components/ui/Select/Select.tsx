import { SelectProps } from "@mantine/core"
import React from "react"
import { StyledSelect } from "./Select.styled"


const Select: React.FC<SelectProps> = (props) => {
  return (
    <StyledSelect {...props} size="1em"/>
  )
}

export default Select