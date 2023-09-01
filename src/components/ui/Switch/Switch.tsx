import { StyledSwitch } from "./Switch.styled"

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Switch: React.FC<Props> = (props) => {
  return (
    <StyledSwitch type="checkbox" {...props} className="switch"/>
  )
}

export default Switch
