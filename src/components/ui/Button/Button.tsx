import { ReactNode } from "react"
import { StyledButton } from "./Button.styled"

interface IProps {
  children: ReactNode,
	className?: string,
	type?: "submit" | "button" 
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IProps> = ({ children, onClick, className, type }) => {
  return (
    <StyledButton type={type} onClick={onClick} className={`btn ${className || ''}`}>
      { children }
    </StyledButton>
  )
}

export default Button
