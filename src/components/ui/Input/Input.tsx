import React from "react"
import { StyledInput } from "./Input.styled"

interface IProps {
	caption?: string,
	className?: string
} 

const Input: React.FC<IProps & React.InputHTMLAttributes<HTMLInputElement>> = React.forwardRef<HTMLInputElement, IProps>(({ 
	caption,
	className,
	...rest
}, ref) => {

	return (
		<StyledInput  className={className}>
			<span className="caption">{caption}</span>
			<input placeholder="" ref={ref} {...rest} />
		</StyledInput>
	)
})

export default Input