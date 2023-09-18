import { StyledTextarea } from "./Textarea.styled"
import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react"

interface IProps {
  label?: string,
  placeholder?: string,
  ref:  ForwardedRef<HTMLTextAreaElement>
}

const Textarea: React.FC<IProps & InputHTMLAttributes<HTMLTextAreaElement>> = forwardRef<
  HTMLTextAreaElement,
  IProps
>(({ label, placeholder}, ref) => {
  return (
    <StyledTextarea>
      <span className="label">{label}</span>
      <textarea ref={ref} placeholder={placeholder}/>
    </StyledTextarea>
  )
})

export default Textarea

