import React from "react"
import { StyledInput } from "./Input.styled"

interface IProps {
	label?: string,
	className?: string
}

const Input: React.FC<IProps & React.InputHTMLAttributes<HTMLInputElement>> = React.forwardRef<HTMLInputElement, IProps>(
	({
		label,
		className,
		...rest
	}, ref) => {
		return (
			<StyledInput className={`${className} input-container`}>
				<span className="label">{label}</span>
				<input ref={ref} {...rest} />
			</StyledInput>
		)
	}
)

export default Input