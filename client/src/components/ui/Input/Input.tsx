import React, { InputHTMLAttributes } from "react"
import { StyledInput } from "./Input.styled"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string,
	className?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(({ label, className = "", ...rest }: Props, ref) => {
  return (
    <StyledInput className={`${className} input-container`}>
      <span className="label">{label}</span>
      <input
        ref={ref}
        {...rest}
        autoComplete="off"
      />
    </StyledInput>
  )
})

export default Input
