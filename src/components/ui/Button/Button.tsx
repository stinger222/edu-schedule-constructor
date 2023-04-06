import { ReactNode } from "react"
import { StyledButton } from "./Button.styled"

interface IProps {
  children: ReactNode,
	className?: string,
	type?: "submit" | "button",
	disabled?: boolean,
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IProps> = ({ children, onClick, className, type, disabled }) => {
  return (
    <StyledButton
			type={type}
			onClick={onClick}
			className={`btn ${className || ''}`}
			disabled={disabled} 
		>
      { children }
    </StyledButton>
  )
}

export default Button
