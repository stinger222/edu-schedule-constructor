import { StyledSwitch } from "./Switch.styled"

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Switch = (props: Props) => {
  return (
    <StyledSwitch type="checkbox" {...props} className="switch"/>
  )
}

export default Switch
