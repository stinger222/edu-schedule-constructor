import { StyledTextarea } from "./Textarea.styled"
import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react"

type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string,
  placeholder?: string,
  ref:  ForwardedRef<HTMLTextAreaElement>
}

const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ label, placeholder }: Props, ref) => {
  return (
    <StyledTextarea>
      <span className="label">{label}</span>
      <textarea
        ref={ref}
        placeholder={placeholder}
      />
    </StyledTextarea>
  )
})

export default Textarea

