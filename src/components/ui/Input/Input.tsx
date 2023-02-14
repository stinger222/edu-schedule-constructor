import React from "react"
import { StyledInput } from "./Input.styled"

interface IProps {
	caption?: string
} 

const Input: React.FC<IProps> = React.forwardRef<HTMLInputElement, IProps>(({ 
	caption,
	...rest
}, ref) => {

	return (
		<StyledInput>
			<span className="caption">{caption}</span>
			<input ref={ref} {...rest} />
		</StyledInput>
	)
})

export default Input