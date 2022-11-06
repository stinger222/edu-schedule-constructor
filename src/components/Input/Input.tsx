import { StyledInput } from "./Input.styled"

interface IProps {
  className?: string,
  placeholder?: string,
  caption?: string
}

const placeholders: string[] = [
  
]
  
const getRandomPlaceholder = () => {
  const min = 0
  const max = placeholders.length - 1
  return placeholders[Math.floor(Math.random() * (max - min + 1)) + min]
}

const Input: React.FC<IProps> = ({ className, placeholder, caption }) => {
  return (
    <StyledInput className={className}>
      <p className="caption">{caption}</p>
      <input
        placeholder={placeholder}
      />
    </StyledInput>
  )
}

export default Input