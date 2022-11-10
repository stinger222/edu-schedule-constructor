import { StyledInput } from "./Input.styled"

interface IProps {
  id?: string,
  name?: string,
  placeholder?: string,
  caption?: string
  value?: string | number,
  onChange?: any,
  className?: string,
  errors?: Object,
  touched?: Object
}

const placeholders: string[] = []
  
const getRandomPlaceholder = () => {
  const min = 0
  const max = placeholders.length - 1
  return placeholders[Math.floor(Math.random() * (max - min + 1)) + min]
}

const Input: React.FC<IProps> = (props) => {
  return (
    <StyledInput className={props.className} id={props.id}>
      <p className="caption">{props.caption}</p>
      <input
        className={props.touched[props.name] && props.errors[props.name] ? 'invalid' : ''}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </StyledInput>
  )
}

export default Input