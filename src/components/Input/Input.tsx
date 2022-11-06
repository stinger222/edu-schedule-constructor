import { StyledInput } from "./Input.styled"

interface IProps {
  className?: string,
  placeholder?: string,
  caption?: string
  id?: string,
  name?: string,
  onChange?: any;
  value?: string | number
}

const placeholders: string[] = [
  
]
  
const getRandomPlaceholder = () => {
  const min = 0
  const max = placeholders.length - 1
  return placeholders[Math.floor(Math.random() * (max - min + 1)) + min]
}

const Input: React.FC<IProps> = (
  { id, name, onChange, value, placeholder, caption, className }
) => {
  return (
    <StyledInput className={className} id={id}>
      <p className="caption">{caption}</p>
      <input
        value={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
      />
    </StyledInput>
  )
}

export default Input