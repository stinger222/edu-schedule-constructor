import { Field } from "formik"
import { ReactNode } from "react"
import { StyledInput } from "./Input.styled"

interface IProps {
  id?: string,
  name?: string,
  placeholder?: string,
  caption?: string
  value?: string | number,
	type?: string,
  onChange?: any,
  className?: string,
  errors?: Object,
  touched?: Object,
  children?: ReactNode
}

const placeholders: string[] = []
  
const Input: React.FC<IProps> = (props) => {

  return (
    <StyledInput className={props.className} id={props.id}>
      <p className="caption">{props.caption}</p>
      {
        props.children  ||
        <input
          className={props?.touched?.[props.name] && props?.errors?.[props.name] ? 'invalid' : ''}
          value={props.value}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          type={props.type ?? 'text'}
        />
      }
    </StyledInput>
  )
}

export default Input