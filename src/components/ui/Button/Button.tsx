import { ReactNode } from "react"
import { StyledButton } from "./Button.styled"

interface IProps {
  children: ReactNode,
	className?: string,
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IProps> = ({ children, onClick, className }) => {
  return (
    <StyledButton onClick={onClick} className={`btn ${className || ''}`}>
      { children }
    </StyledButton>
  )
}

export default Button
