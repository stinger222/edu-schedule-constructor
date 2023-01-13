import { ReactNode } from "react"
import { StyledButton } from "./Button.styled"

interface IProps {
  children: ReactNode,
	onClick?: React.MouseEventHandler<HTMLButtonElement> 
}

const Button: React.FC<IProps> = ({ children, onClick }) => {
  return (
    <StyledButton onClick={onClick} className="btn">
      { children }
    </StyledButton>
  )
}

export default Button
