import React from "react"
import { StyledInput } from "./Input.styled"

interface IProps {
	label?: string,
	className?: string
} 

const Input: React.FC<IProps & React.InputHTMLAttributes<HTMLInputElement>> = React.forwardRef<HTMLInputElement, IProps>(({ 
	label,
	className,
	...rest
}, ref) => {

	return (
		<StyledInput  className={className}>
			<span className="label">{label}</span>
			<input placeholder="" ref={ref} {...rest} />
		</StyledInput>
	)
})

export default Input